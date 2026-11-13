import { test, expect } from '@playwright/test';

export class LaunchApplication {
    constructor(page) {
        this.page = page;

        this.verifyHomeButton = page.getByRole('link', { name: 'Home' });
    }

    /**
     * @author: Niranjan Vaddi
     * Launching the application URL on browser
     * 
     */
    async launchApplicationURL() {
        test.info('Launching application: ');
        await this.page.goto('/');
        test.info('application lauched succesfully');

        //Verifying the navigation
        await expect(this.verifyHomeButton).toBeVisible();
        test.info('Home button verified successfully');
    }

}