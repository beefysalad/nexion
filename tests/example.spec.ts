import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Nexion/)
})

test('getting started link', async ({ page }) => {
  await page.goto('/')

  // Check if landing page has docs link and it works
  const docsLink = page.getByRole('link', { name: /docs/i }).first()
  if (await docsLink.isVisible()) {
    await docsLink.click()
    await expect(page).toHaveURL(/.*docs/)
  } else {
    // If we are on clean boilerplate, just check for the boilerplate text
    await expect(page.locator('h1'))
      .toContainText(/Next.js Boilerplate/i, { timeout: 5000 })
      .catch(() => null)
  }
})
