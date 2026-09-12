from __future__ import annotations

import glob
import os
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

reports = glob.glob("reports/junit-*.xml")
totals = {"tests": 0, "failures": 0, "errors": 0, "skipped": 0, "time": 0.0}

for report in reports:
    root = ET.parse(report).getroot()
    suites = [root] if root.tag == "testsuite" else list(root.findall("testsuite"))
    for suite in suites:
        totals["tests"] += int(suite.attrib.get("tests", 0))
        totals["failures"] += int(suite.attrib.get("failures", 0))
        totals["errors"] += int(suite.attrib.get("errors", 0))
        totals["skipped"] += int(suite.attrib.get("skipped", 0))
        totals["time"] += float(suite.attrib.get("time", 0.0))

failed = totals["failures"] + totals["errors"]
passed = totals["tests"] - failed - totals["skipped"]
browser = os.getenv("BROWSER", "browser").title()
icon = "✅" if reports and failed == 0 else "❌"
headline = (
    f"{icon} {passed} passed, {failed} failed, {totals['skipped']} skipped"
    if reports
    else "❌ Cypress JUnit reports were not generated"
)

summary = f"""## {browser} Cypress results

### {headline}

| Total | Passed | Failed | Skipped | Duration |
| ---: | ---: | ---: | ---: | ---: |
| {totals['tests']} | {passed} | {failed} | {totals['skipped']} | {totals['time']:.2f}s |

JUnit reports, videos and failure screenshots are available in the workflow artifacts.
"""

print(headline)
summary_path = os.getenv("GITHUB_STEP_SUMMARY")
if summary_path:
    with Path(summary_path).open("a", encoding="utf-8") as output:
        output.write(summary)

output_path = os.getenv("GITHUB_OUTPUT")
if output_path:
    with Path(output_path).open("a", encoding="utf-8") as output:
        output.write(f"passed={passed}\nfailed={failed}\nskipped={totals['skipped']}\n")

if not reports:
    print("::error title=Test reports missing::Cypress did not create JUnit XML reports")
    sys.exit(1)

if failed:
    print(f"::error title={browser} Cypress tests failed::{failed} failed, {passed} passed")
else:
    print(f"::notice title={browser} Cypress tests passed::{passed} passed, {totals['skipped']} skipped")
