# End-to-End Testing with Playwright

This directory contains E2E tests for the portfolio website.

## Setup

First, install Playwright browsers:

```bash
npx playwright install chromium
```

Or install all browsers:

```bash
npx playwright install
```

## Running Tests

### Run all tests (headless mode)
```bash
npm run test:e2e
```

### Run tests with browser visible
```bash
npm run test:e2e:headed
```

### Open Playwright UI (interactive mode)
```bash
npm run test:e2e:ui
```

### Debug mode (step through tests)
```bash
npm run test:e2e:debug
```

### Run specific test file
```bash
npx playwright test e2e/homepage.spec.js
```

### Run tests on specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project="Mobile Chrome"
```

## Test Structure

- **homepage.spec.js** - Tests homepage, navigation, and theme toggle
- **projects.spec.js** - Tests project carousel/slider and interactions
- **experience.spec.js** - Tests experience timeline section
- **certificates.spec.js** - Tests certificates section and images

## Test Coverage

### Homepage Tests
- ✅ Page loads successfully
- ✅ Hero section displays
- ✅ Navigation works (scroll to sections)
- ✅ Theme toggle functionality
- ✅ Mobile responsiveness

### Projects Tests
- ✅ Project cards display
- ✅ Arrow navigation (desktop)
- ✅ Swipe navigation (mobile)
- ✅ Project details visible
- ✅ Links work (GitHub, Demo)
- ✅ Dot navigation

### Experience Tests
- ✅ Timeline displays
- ✅ Experience cards visible
- ✅ Current position badge
- ✅ Job descriptions
- ✅ Technology tags
- ✅ Mobile layout
- ✅ Summary stats

### Certificates Tests
- ✅ Certificate cards display
- ✅ Certificate images load
- ✅ Verified badges visible
- ✅ Certificate details (issuer, dates)
- ✅ Skill tags
- ✅ Credential links
- ✅ Category badges
- ✅ Mobile responsiveness

## Configuration

Test configuration is in `playwright.config.js`:
- Tests run on Chromium (desktop) and Mobile Chrome
- Automatically starts dev server before tests
- Screenshots on failure
- HTML report generated

## View Test Results

After running tests, view the HTML report:

```bash
npx playwright show-report
```

## Tips

- Make sure your dev server is running on http://localhost:3000
- Tests will automatically start the dev server if not running
- Use `--headed` to see tests run in real browsers
- Use `--ui` mode for interactive debugging
- Tests run in parallel by default for speed
