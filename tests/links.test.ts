// npx playwright test tests/links.test.ts --headed --project="Links Galaxy S9+"

import { test, expect, Page } from '@playwright/test';
import { IndexPage } from '../pages/indexPom';

let indexPage : IndexPage;

test.beforeEach(async ({ page }) => {
    indexPage = new IndexPage(page);
    await indexPage.page.goto('https://robbertchampagne.com/')
});

test('Domain check.', async ({ page }) => {
    const url = indexPage.page.url();
    expect(url).toBe('https://robbertchampagne.com/');
    const headingText = await indexPage.heading.innerText();
    expect(headingText).toBe('QA Engineer');
});

test('Subdomain check.', async ({ page }) => {
    await indexPage.page.goto('https://www.robbertchampagne.com/');
    const url = indexPage.page.url();
    expect(url).toBe('https://robbertchampagne.com/');
    const headingText = await indexPage.heading.innerText();
    expect(headingText).toBe('QA Engineer');
});

test('Check the Mediahuis project link.', async ({ page }) => {
    await indexPage.mediahuisProject.hover();
    const page2Promise = indexPage.page.waitForEvent('popup');
    await indexPage.mediahuisProjectLink.click();
    const page2 = await page2Promise;
    // Check the URL of the new page
    const url = page2.url();
    expect(url).toBe('https://www.mediahuis.be/nl/');
});

test('Check the iO project link.', async ({ page }) => {
    await indexPage.iOProject.hover();
    const page2Promise = indexPage.page.waitForEvent('popup');
    await indexPage.iOProjectLink.click();
    const page2 = await page2Promise;
    // Check the URL of the new page
    const url = page2.url();
    expect(url).toBe('https://www.iodigital.com/nl/home');
});

test('Check the Responsum project link.', async ({ page }) => {
    await indexPage.responsumProject.hover();
    const page2Promise = indexPage.page.waitForEvent('popup');
    await indexPage.responsumProjectLink.click();
    const page2 = await page2Promise;
    // Check the URL of the new page
    const url = page2.url();
    expect(url).toBe('https://responsum.eu/');
});

test('Check the footer link LinkedIn.', async ({ page }) => {
    const page2Promise = indexPage.page.waitForEvent('popup');
    await indexPage.linkedinLink.click();
    const page2 = await page2Promise;
    // Check the URL of the new page
    const url = page2.url();
    expect(url).toBe('https://www.linkedin.com/in/robbert-champagne-4565311a2');
});

test('Check the footer link Github.', async ({ page }) => {
    const page2Promise = indexPage.page.waitForEvent('popup');
    await indexPage.githubLink.click();
    const page2 = await page2Promise;
    // Check the URL of the new page
    const url = page2.url();
    expect(url).toBe('https://github.com/RobbertChampagne');
});

test('Check the footer link Icons8.', async ({ page }) => {

    // Skip this test for the Galaxy S9+ project
    test.skip(test.info().project.name === 'Links Galaxy S9+', 'Skipping test for Galaxy S9+');

    const page2Promise = indexPage.page.waitForEvent('popup');
    await indexPage.icons8Link.click();
    const page2 = await page2Promise;
    // Check the URL of the new page
    const url = page2.url();
    expect(url).toBe('https://icons8.com/');
});

test('Check the Brightest Link.', async ({ page }) => {
    const page2Promise = indexPage.page.waitForEvent('popup');
    await indexPage.brightestLink.click();
    const page2 = await page2Promise;
    // Check the URL of the new page
    const url = page2.url();
    expect(url).toBe('https://brightest.be/');
});

test('Check the Brightest Playwright course link.', async ({ page }) => {
    const page2Promise = indexPage.page.waitForEvent('popup');
    await indexPage.brightestPlaywrightCourseLink.click();
    const page2 = await page2Promise;
    // Check the URL of the new page
    const url = page2.url();
    expect(url).toBe('https://academy.brightest.be/courses/playwright/');
});