import{test, expect} from '@playwright/test';
const users = require('../data/user.js');
export class LoginPage {
    constructor(page) {
        this.page = page;

        //Locators
        this.loginOrSignup = page.getByRole('link', { name: ' Signup / Login' });
        this.userNameTextField = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.passwordTextField = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });

        this.verifyLogin = page.getByRole('link', { name: ' Logout' }); //page.getByRole('link', { name: 'Logout' });

    }

    /**
     * @author: Niranjan Vaddi
     * Logging into the application
     * 
     */
    async loginToApplication() {
        await this.loginOrSignup.click();
        await this.userNameTextField.fill(users.standardUser.username);
        await this.passwordTextField.fill(users.standardUser.password);
        await this.loginButton.click();

        //Verify login
        await expect(this.verifyLogin).toBeVisible();
        test.info('Logout button verified successfully');
    }
}