import { test, expect } from '@playwright/test';

export class CartPage {
    constructor(page) {
        this.page = page;

        //Locators
        this.blueTopProductHover = page.getByText('Blue Top').first(); //Item 1
        //this.blueTopProductHover = page.locator('.product-image-wrapper').filter({ hasText: 'Blue Top' });
        this.selectCart = page.getByText('Add to cart').nth(1);

        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });

        this.sleevLess = page.getByText('Rs. 1000 Sleeveless Dress Add').first(); // Item 2
        this.sleeLessAddCart = page.getByText('Add to cart').nth(5);

        this.viewCartItems = page.getByRole('link', { name: 'View Cart' });

    }

    async addItemToCart() {

        //Adding item1 to product
        await this.page.waitForTimeout(1000);
        await this.blueTopProductHover.hover();
        await this.page.waitForTimeout(1000);
        await this.selectCart.click();
        await this.page.waitForTimeout(1000);

        //Clicking on Continue Shopping button
        await this.continueShoppingButton.click();

        //Adding item2 to product
        await this.sleevLess.hover();
        await this.sleeLessAddCart.click();
        test.info('Item added to cart');

        await expect(this.viewCartItems).toBeVisible();
        test.info('View cart icon is verified');
        await this.viewCartItems.click();
    }
}