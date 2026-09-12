# UI and Network Test Strategy

## Purpose

This suite gives fast feedback on browser behaviour and browser-to-API interactions in the Cypress Kitchen Sink. It demonstrates a maintainable test approach without duplicating the shopping and authentication examples in my other repositories.

## Coverage

| Layer | Coverage |
| --- | --- |
| Smoke | Actions, querying, traversal and network pages load correctly |
| Functional | Input, clear, focus, blur, checkbox, radio, select and submission |
| Interaction | Double click and conditional content visibility |
| Component | Scoped queries, breadcrumbs, navigation, lists and sibling tabs |
| Integration | Browser-triggered GET and POST requests |
| Contract | Direct comment API status and response shape |
| Cross-browser | 12 scenarios in Chrome and Firefox |

## Test design

Page objects contain selectors and repeated interactions, while specs keep the behaviour and readable assertions visible. Reusable form data is stored in a fixture. Each scenario opens its own starting page and does not depend on another test's state.

Network assertions check the response status and essential payload fields. They deliberately avoid exact full-body comparisons so harmless data changes do not create noise. Component tests scope queries to a known parent wherever that makes the intent clearer.

## Merge gates

A change is ready when:

1. TypeScript validation passes.
2. Chrome and Firefox execute all 12 scenarios.
3. The Actions summary reports non-zero test totals.
4. A failing test preserves JUnit, video and screenshot evidence.
5. Tests pass independently and do not rely on execution order.

## Failure investigation

Start with the count summary, then review the failing step and JUnit artifact. Use the screenshot for visible-state failures and the video for timing or navigation problems. For network failures, compare the intercepted method, route, status and response contract.

## Risks

The application and comment service are public demos hosted outside this repository. Availability can change without notice. The suite uses stable example routes and behaviour-focused assertions, with one CI retry reserved for transient browser or network errors.

## Future work

In a controlled product environment, the next additions would be accessibility checks, API-assisted test-data setup, tagged smoke and regression suites, and parallel execution based on actual pipeline timing.
