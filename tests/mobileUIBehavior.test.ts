// npx playwright test tests/mobileUIBehavior.test.ts --headed

import { test, expect, Page } from '@playwright/test';
import { IndexPage } from '../pages/indexPom';

let indexPage: IndexPage;

test.beforeEach(async ({ page }) => {
    indexPage = new IndexPage(page);
    await indexPage.page.goto('https://robbertchampagne.com/')
});

test('Click the "projects" link in the navbar and check the scroll.', async ({ page }) => {
    // Open the menu on mobile
    await indexPage.mobileHamburgerMenuButton.click();

    indexPage.projectsLinkNavbar.click();
    // Wait for scroll to finish
    await page.waitForTimeout(1000);
    // Check if the specific text is visible in the viewport
    const textVisible = await page.isVisible('text=Check out some of my QA');
    expect(textVisible).toBe(true);
});

test('Click the "skills" link in the navbar and check the scroll.', async ({ page }) => {
    // Open the menu on mobile
    await indexPage.mobileHamburgerMenuButton.click();

    indexPage.skillsLinkNavbar.click();
    // Wait for scroll to finish
    await page.waitForTimeout(1000);
    // Check if the specific text is visible in the viewport
    const textVisible = await page.isVisible('text=Always a Student, Never a Master');
    expect(textVisible).toBe(true);
});

test('Click the "contact" link in the navbar and check the scroll.', async ({ page }) => {
    // Open the menu on mobile
    await indexPage.mobileHamburgerMenuButton.click();

    indexPage.contactLinkNavbar.click();
    // Wait for scroll to finish
    await page.waitForTimeout(1000);
    // Check if the specific text is visible in the viewport
    const textVisible = await page.isVisible('text=How can I help you?');
    expect(textVisible).toBe(true);
});

test('First scroll down then click the "logo" and check the scroll back up.', async ({ page }) => {
    // Open the menu on mobile
    await indexPage.mobileHamburgerMenuButton.click();

    indexPage.contactLinkNavbar.click();
    // Wait for scroll to finish
    await page.waitForTimeout(1000);

    indexPage.logo.click();
    // Wait for scroll to finish
    await page.waitForTimeout(1000);
    // Check if the specific text is visible in the viewport
    const textVisible = await page.isVisible('text=Ensuring Software Quality');
    expect(textVisible).toBe(true);
});

test('Click the "connect with me" button and check the scroll.', async ({ page }) => {
    indexPage.connectWithMeButton.click();
    // Wait for scroll to finish
    await page.waitForTimeout(1000);
    // Check if the specific text is visible in the viewport
    const textVisible = await page.isVisible('text=How can I help you?');
    expect(textVisible).toBe(true);
});

test('Check if the text is visible when you hover a project.', async ({ page }) => {
    await indexPage.mediahuisProject.hover();
    const mediahuisProjectText = await indexPage.mediahuisProjectText.innerText();
    expect(mediahuisProjectText).toContain('Mediahuis');

    await indexPage.iOProject.hover();
    const iOProjectText = await indexPage.iOProjectText.innerText();
    expect(iOProjectText).toContain('iO');

    await indexPage.responsumProject.hover();
    const responsumProjectText = await indexPage.responsumProjectText.innerText();
    expect(responsumProjectText).toContain('Responsum T&M');
});