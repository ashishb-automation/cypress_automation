# Cypress UI and Network Automation

[![Cypress Tests](https://github.com/ashishbsdet-sketch/cypress_automation/actions/workflows/cypress.yml/badge.svg)](https://github.com/ashishbsdet-sketch/cypress_automation/actions/workflows/cypress.yml)

This project exercises browser behaviour and browser-to-API interactions on the public [Cypress Kitchen Sink](https://example.cypress.io). I chose this application because it offers stable, purpose-built examples without repeating the shopping or login flows used in my other automation repositories.

The framework is intentionally small enough to understand at a glance, while still showing the engineering practices I would use on a larger test suite.

## What is covered

- form input, clearing, selection, focus, blur and submission behaviour
- mouse interactions that reveal alternate page content
- element lookup within lists and component boundaries
- breadcrumb, navigation, list and sibling traversal
- intercepted GET and POST requests with response assertions
- a direct API contract check from Cypress
- 14 independent scenarios in Chrome and Firefox
- TypeScript validation before browser tests
- JUnit reports, videos and failure screenshots
- passed, failed and skipped counts in the GitHub Actions summary

## Project structure

```text
.
├── cypress/
│   ├── e2e/                  # Behaviour-focused specifications
│   ├── fixtures/             # Reusable test data
│   ├── pages/                # Page objects and selectors
│   └── support/              # Custom commands and global setup
├── docs/TEST_STRATEGY.md     # Scope, risks and quality gates
├── .github/workflows/        # Cross-browser CI pipeline
├── cypress.config.ts
├── package.json
└── tsconfig.json
```

## Run locally

You need Node.js 20 or later.

```bash
git clone https://github.com/ashishbsdet-sketch/cypress_automation.git
cd cypress_automation
npm install
npm test
```

Useful commands:

```bash
npm run test:chrome
npm run test:firefox
npm run test:headed
npm run test:open
npm run test:typecheck
```

## Design choices

- Specs describe behaviour; page objects own selectors and repeated interactions.
- Test data lives in fixtures instead of being scattered through the suite.
- Network tests assert status and response shape, not only visible messages.
- Each scenario opens a known starting page and can run by itself.
- Queries are scoped to the relevant component to reduce accidental matches.
- CI does not hide browser failures: it records evidence, publishes counts, then fails the job.
- One retry is available in CI for transient browser problems, while local failures remain immediate.

The scope, merge gates and known risks are documented in [the test strategy](docs/TEST_STRATEGY.md).

## Configuration

The default application URL is `https://example.cypress.io`. Set `BASE_URL` to point the suite at another compatible environment.

## Next improvements

For a product-owned environment, I would add accessibility checks, tagged smoke/regression suites, controlled test-data creation and parallel execution based on measured pipeline duration.

## Disclaimer

The Cypress Kitchen Sink is a public demonstration application. This repository is an independent portfolio project.
