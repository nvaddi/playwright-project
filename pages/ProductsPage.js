import { test, expect } from '@playwright/test';

export class ProductsPage {
    constructor(page) {
        this.page = page;

        //Locators
        this.products = page.getByRole('link', { name: 'Products' });
    }

    async navigateToProducts() {
        await this.products.click();
    }
}