import { test, expect } from '@playwright/test';

export class ProductsPage {
    constructor(page) {
        this.page = page;

        //Locators
        this.products = page.getByRole('link', { name: 'Products' });
    }
/**
 * @author: Niranjan Vaddi
 * Navigating to the products to shop
 *
 */
    async navigateToProducts() {
        await this.products.click();
    }
}