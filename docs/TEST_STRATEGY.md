# UI Test Strategy

## Purpose

This suite provides fast feedback on public product-search and shopping-cart behaviour in the nopCommerce demo store. It is a portfolio example of maintainable Cypress automation, not production monitoring for a third-party site.

## Coverage

| Layer | Coverage |
| --- | --- |
| Smoke | Product search and add-to-cart journey |
| Functional | Exact search, broad search, cart quantity and removal |
| Negative | No-results behaviour |
| Integration | Search and add-to-cart network responses |
| Cross-browser | Chrome and Firefox |

## Test design

Page objects contain selectors and UI interactions. Specs retain the user journey and assertions. Product data that may be reused across scenarios is stored in a fixture. Every test starts with cleared cookies and local storage and can run independently.

## Merge gates

A change is ready when:

1. TypeScript validation passes.
2. Chrome and Firefox suites execute real tests.
3. The Actions summary reports non-zero totals.
4. Failed runs retain screenshots and videos.
5. No test relies on another test's cart or session state.

## Risks

The application is a public demo hosted outside this repository. Availability and content can change without notice. Assertions therefore focus on stable customer behaviour rather than pixel-level appearance. One CI retry is allowed for transient browser or network errors; persistent failures remain visible.

## Future work

The next useful additions would be authenticated account flows, API-assisted data creation, accessibility checks and visual regression for stable components.
