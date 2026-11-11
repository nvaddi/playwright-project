import { test, expect } from '@playwright/test';
const cards = require('../data/cards.js')

export class PaymentPage {
    constructor(page) {
        this.page = page;

        //Locators
        this.cardHolderName = page.locator('input[name="name_on_card"]');
        this.cardNumber = page.locator('input[name="card_number"]');
        this.cvvNumber = page.getByRole('textbox', { name: 'ex.' });
        this.cardMonth = page.getByRole('textbox', { name: 'MM' });
        this.cardYear = page.getByRole('textbox', { name: 'YYYY' });
        this.payAndConfirmBtton = page.getByRole('button', { name: 'Pay and Confirm Order' });
        this.message = page.getByText('Order Placed!');
    }

    async paymentAndConfirmOrder() {
        await this.cardHolderName.fill(cards.cardAxis.cardHolderName);
        await this.cardNumber.fill(cards.cardAxis.cardNumber);
        await this.cvvNumber.fill(cards.cardAxis.cardCvv);
        await this.cardMonth.fill(cards.cardAxis.cardMonth);
        await this.cardYear.fill(cards.cardAxis.cardYear);
        test.info('Payment details entered')
        await this.payAndConfirmBtton.click();

        await expect(this.message).toBeVisible();
        test.info('Order place completed');
    }
}