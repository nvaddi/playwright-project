import { test, expect } from '@playwright/test';

export class CartPage {
    constructor(page) {
        this.page = page;

        //Locators
        this.blueTopProductHover = page.getByText('Blue Top').first();
        //this.blueTopProductHover = page.locator('.product-image-wrapper').filter({ hasText: 'Blue Top' });
        this.selectCart = page.getByText('Add to cart').nth(1);
        this.viewCartItems = page.getByRole('link', { name: 'View Cart' });

    }

    async addItemToCart() {
        await this.page.waitForTimeout(1000);
        await this.blueTopProductHover.hover();
        await this.page.waitForTimeout(1000);
        await this.selectCart.click();
        await this.page.waitForTimeout(1000);
        test.info('Item added to cart');

        await expect(this.viewCartItems).toBeVisible();
        test.info('View cart icon is verified');
        await this.viewCartItems.click();
    }
}