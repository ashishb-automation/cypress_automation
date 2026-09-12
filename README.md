# Cypress E-commerce Automation

[![Cypress Tests](https://github.com/ashishbsdet-sketch/cypress_automation/actions/workflows/cypress.yml/badge.svg)](https://github.com/ashishbsdet-sketch/cypress_automation/actions/workflows/cypress.yml)

This project tests product search and shopping-cart behaviour on the public [nopCommerce demo store](https://demo.nopcommerce.com). I used Cypress and TypeScript to keep the scenarios readable while separating selectors, reusable actions and test data from the specs.

## What is covered

- exact and partial product searches
- no-results validation
- add-to-cart network response
- cart item and quantity checks
- removing a product and confirming the empty state
- Chrome and Firefox execution
- JUnit reporting, videos and failure screenshots
- visible passed, failed and skipped counts in GitHub Actions

## Project structure

```text
.
├── cypress/
│   ├── e2e/                  # Customer journeys
│   ├── fixtures/             # Reusable product data
│   ├── pages/                # Page objects
│   └── support/              # Commands and global setup
├── docs/TEST_STRATEGY.md     # Scope, risks and merge gates
├── .github/workflows/        # Cross-browser CI
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

- Specs describe customer behaviour rather than implementation details.
- Page objects keep selectors and interactions in one place.
- A custom command handles the repeated product-search setup.
- Network intercepts confirm that search and cart requests complete successfully.
- Tests clear browser storage and do not depend on execution order.
- CI retains JUnit reports, videos and screenshots for investigation.
- The workflow summary reports real test counts even when a run fails.

The detailed scope and risks are documented in [the test strategy](docs/TEST_STRATEGY.md).

## Configuration

The default application URL is `https://demo.nopcommerce.com`. Set `BASE_URL` to run the same suite against another compatible environment.

## Known limitation

The application is a public demo and its catalogue may change. The suite deliberately avoids account creation or order submission so it does not leave shared data behind.

## Next improvements

The next meaningful extension would cover authenticated customer flows, accessibility checks and visual comparisons once stable test data is available.

## Disclaimer

nopCommerce is a public demo application. This repository is an independent portfolio project.
