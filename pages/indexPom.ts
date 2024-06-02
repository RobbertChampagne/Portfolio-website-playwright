import { type Locator, type Page } from '@playwright/test';

export class IndexPage {
    readonly page: Page;
    readonly mediahuisProject: Locator;
    readonly mediahuisProjectLink: Locator;
    readonly iOProject: Locator;
    readonly iOProjectLink: Locator;
    readonly responsumProject: Locator;
    readonly responsumProjectLink: Locator;
    readonly linkedinLink: Locator;
    readonly githubLink: Locator;
    readonly icons8Link: Locator;
    readonly brightestLink: Locator;
    readonly brightestPlaywrightCourseLink: Locator;
    readonly heading: Locator;
    readonly resumeButton: Locator;
    readonly mobileHamburgerMenuButton: Locator;
    readonly mobileCloseMenuButton: Locator;
    readonly projectsLinkNavbar: Locator;
    readonly skillsLinkNavbar: Locator;
    readonly contactLinkNavbar: Locator;
    readonly logo: Locator;
    readonly connectWithMeButton: Locator;
    readonly contactEmailLink: Locator;
    readonly mediahuisProjectText: Locator;
    readonly iOProjectText: Locator;
    readonly responsumProjectText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mediahuisProject = page.locator('div').filter({ hasText: 'Mediahuis Publishing Studio' }).first();
        this.mediahuisProjectLink = page.locator('#projects').getByRole('link').first();
        this.mediahuisProjectText = page.getByRole('heading', { name: 'Mediahuis' });
        this.iOProject = page.locator('div').filter({ hasText: 'iO A end-to-end agency for' }).first();
        this.iOProjectLink = page.locator('#projects').getByRole('link').nth(1);
        this.iOProjectText = page.getByRole('heading', { name: 'iO', exact: true });
        this.responsumProject = page.locator('div').filter({ hasText: 'Responsum T&M A software' }).first();
        this.responsumProjectLink = page.locator('#projects').getByRole('link').nth(2);
        this.responsumProjectText= page.getByRole('heading', { name: 'Responsum T&M' });
        this.linkedinLink = page.getByRole('link', { name: 'Linkedin' });
        this.githubLink = page.getByRole('link', { name: 'GitHub' });
        this.icons8Link = page.getByRole('link', { name: 'Icons8' });
        this.brightestLink = page.getByRole('link', { name: 'Brightest' });
        this.brightestPlaywrightCourseLink = page.getByRole('link', { name: 'training course' });
        this.heading = page.getByRole('heading', { name: 'QA Engineer' });
        this.resumeButton = page.getByRole('link', { name: 'RESUME' });
        this.mobileHamburgerMenuButton = page.locator('div').filter({ hasText: 'PROJECTS SKILLS CONTACT RESUME' }).locator('div');
        this.mobileCloseMenuButton = page.locator('span').nth(2);
        this.projectsLinkNavbar = page.getByRole('link', { name: 'PROJECTS' });
        this.skillsLinkNavbar = page.getByRole('link', { name: 'SKILLS' });
        this.contactLinkNavbar = page.getByRole('link', { name: 'CONTACT' });
        this.logo = page.locator('#logo').getByRole('link');
        this.connectWithMeButton = page.getByRole('link', { name: 'Connect With Me' });
        this.contactEmailLink = page.getByRole('link', { name: 'robbert.champagne1@gmail.com' });
    }

    async navigateTo() {
        await this.page.goto('https://robbertchampagne.com/');
    }

}