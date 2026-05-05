# Testing Plan for Aaditya Golash Website

## Goals
- Validate UI structure, content consistency, and navigation behavior.
- Confirm functional flows for primary project sections and resume/contact entry points.
- Enforce accessibility and semantic HTML best practices.
- Provide a reproducible test suite for future regression coverage.

## Test Categories

### 1. UI and Visual Structure
- Verify the homepage hero loads correctly with brand messaging.
- Confirm primary action buttons are displayed and labeled correctly.
- Ensure featured and other project cards render with titles, descriptions, and call-to-action links.
- Validate the header, main, and footer landmark sections are present.

### 2. Functional Navigation
- Test the top menu routes to `Home`, `Systems`, `Lab`, `About`, and `Contact`.
- Validate the homepage action buttons for `VIEW_SYSTEMS`, `OPEN_LAB`, `RESUME`, and `CONTACT`.
- Confirm all primary routes return a non-404 HTTP status.
- Guard against duplicate path generation issues such as `/Aaditya_Golash/Aaditya_Golash/`.

### 3. Accessibility and Web Design Standards
- Use semantic HTML elements for page sections.
- Verify all visually important links are accessible to keyboard navigation.
- Ensure external links use `rel="noopener noreferrer"` when opening in a new tab.
- Confirm headings and structure support screen readers and predictable content flow.

### 4. Regression Expectations
- Any change to the homepage or layout should preserve the hero, navigation, and project card structure.
- Build and test process should be repeatable via the provided Playwright configuration.
- Future content changes should be evaluated against the existing suite to avoid hidden regressions.

## How to Run
1. Install dependencies in the project root:
   ```bash
   npm install
   ```
2. Run the full Playwright suite:
   ```bash
   npm test
   ```
3. Run a specific scenario:
   ```bash
   npm run test:ui
   npm run test:navigation
   npm run test:accessibility
   ```

## Notes
- This test suite is intentionally scoped to the current Hugo site structure.
- The Playwright `webServer` configuration starts a local Hugo server automatically for end-to-end validation.
- Tests are designed to be maintainable and to reflect modern web and SWE standards.
