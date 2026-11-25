"""Collect comparable numbers from local clones of my repositories.

Counts test cases, lines of code (tests and generated files excluded), CI
workflows and the last commit date, so the figures in the case studies come
from the code instead of from memory. Prints a Markdown table, or JSON with
--json.

Usage: python3 tools/metrics/collect.py ../finance-app ../admin.rxf-sys.de ... [--json]
"""

import json
import re
import subprocess
import sys
from pathlib import Path

SKIP_DIRS = {".git", "node_modules", "dist", "build", ".venv", "venv", "__pycache__", "coverage", "test-results", ".turbo"}
CODE_EXT = {".py", ".ts", ".tsx", ".js", ".mjs", ".go", ".css", ".html"}
GENERATED = {"schema.d.ts"}
TEST_PATTERNS = {
    ".py": re.compile(r"^\s*(?:async\s+)?def\s+test_\w+", re.M),
    ".go": re.compile(r"^func\s+(?:Test|Fuzz)\w+\(", re.M),
    ".ts": re.compile(r"^\s*(?:it|test)(?:\.each\([^)]*\))?\(\s*['\"`]", re.M),
    ".tsx": re.compile(r"^\s*(?:it|test)(?:\.each\([^)]*\))?\(\s*['\"`]", re.M),
    ".js": re.compile(r"^\s*(?:it|test|check)\(\s*['\"`]", re.M),
}


def is_test_file(path: Path) -> bool:
    name = path.name
    parts = set(path.parts)
    return (
        name.startswith("test_")
        or name.endswith(("_test.go", ".test.ts", ".test.tsx", ".spec.ts", ".test.js"))
        or "tests" in parts
        or "e2e" in parts
    )


def walk(root: Path):
    for path in root.rglob("*"):
        if any(part in SKIP_DIRS for part in path.relative_to(root).parts):
            continue
        if path.is_file():
            yield path


def collect(root: Path) -> dict:
    tests = 0
    loc = 0
    for path in walk(root):
        suffix = path.suffix
        if suffix not in CODE_EXT or path.name in GENERATED or path.name.endswith(".min.js"):
            continue
        try:
            text = path.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError):
            continue
        if is_test_file(path):
            pattern = TEST_PATTERNS.get(suffix)
            if pattern:
                tests += len(pattern.findall(text))
        else:
            loc += sum(1 for line in text.splitlines() if line.strip())
    workflows = sorted(p.name for p in (root / ".github" / "workflows").glob("*.y*ml")) if (root / ".github" / "workflows").is_dir() else []
    last = subprocess.run(
        ["git", "-C", str(root), "log", "-1", "--format=%cs"], capture_output=True, text=True, check=False
    ).stdout.strip()
    return {"repo": root.name, "tests": tests, "loc": loc, "workflows": workflows, "last_commit": last}


def main(argv: list[str]) -> int:
    as_json = "--json" in argv
    roots = [Path(a).resolve() for a in argv if a != "--json"]
    if not roots:
        print(__doc__, file=sys.stderr)
        return 2
    rows = [collect(root) for root in roots]
    if as_json:
        json.dump(rows, sys.stdout, indent=2, ensure_ascii=False)
        sys.stdout.write("\n")
        return 0
    print("| Repo | Testfälle | Codezeilen | CI-Workflows | Letzter Commit |")
    print("|---|---:|---:|---|---|")
    for r in rows:
        print(f"| {r['repo']} | {r['tests']} | {r['loc']} | {', '.join(r['workflows']) or '·'} | {r['last_commit']} |")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
