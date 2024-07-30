// npx playwright test tests/webDownload.test.ts --headed

import { test, expect, Page } from '@playwright/test';
import { IndexPage } from '../pages/indexPom';

let indexPage: IndexPage;

test.beforeEach(async ({ page }) => {
    indexPage = new IndexPage(page);
    await indexPage.navigateTo();
});

test('CV download on web.', async ({ page }) => {
    // Start waiting for download before clicking.
    const downloadPromise = page.waitForEvent('download');
    await indexPage.resumeButton.click();
    const download = await downloadPromise;

    // Wait for the download process to complete and save the downloaded file somewhere.
    await download.saveAs('./downloads/' + download.suggestedFilename());
    // Print out information about the downloaded file
    console.log('Downloaded file saved as:', download.suggestedFilename());
    console.log('Downloaded from:', download.url());
});