import { test, expect } from '@playwright/test';

export class CheckoutPage {
    constructor(page) {
        this.page = page;

        //Locators
        this.checkoutButton = page.getByText('Proceed To Checkout');
        this.orderComments = page.locator('textarea[name="message"]');
        this.placeOrderButton = page.getByRole('link', { name: 'Place Order' });
    }

    /**
     * @author: Niranjan Vaddi
     * checkoutAndPlaceOrder() method will checkout and order will be placed
     * 
     */
    async checkoutAndPlaceOrder() {
        await this.checkoutButton.click();
        test.info('Checkout button clicked');
        await this.orderComments.fill('Please deliver the items on time');
        await this.placeOrderButton.click();
        test.info('Order placed successfully');
    }
}