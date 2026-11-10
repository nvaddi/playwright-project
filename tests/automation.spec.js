import { test, expect } from '@playwright/test';

test.only('Login to automation practice shopping website ', async ({ page }) => {

    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    test.info('application lauched succesfully');

    await page.getByRole('link', { name: ' Signup / Login' }).click();

    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('niranjan.vaddi@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Testpw$4356');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('link', { name: ' Logout' })).toBeVisible();
    await page.getByRole('link', { name: 'Products' }).click();

    //await page.getByRole('textbox', { name: 'Search Product' }).toBeVisible();

    await page.getByText('Blue Top').first().hover();
    await page.getByText('Add to cart').nth(1).click();

    // await page.getByRole('button', { name: 'Continue Shopping' }).click();

    // await page.getByText('Rs. 1000 Sleeveless Dress Add').first().hover();

    // await page.getByText('Add to cart').nth(5).click();

    await page.getByRole('link', { name: 'View Cart' }).click();

    await page.getByText('Proceed To Checkout').click();

    await page.locator('textarea[name="message"]').fill('Please deliver the items on time');

    await page.getByRole('link', { name: 'Place Order' }).click();

    await page.locator('input[name="name_on_card"]').fill('Niranjan Vaddi');

    await page.locator('input[name="card_number"]').fill('234512347658');

    await page.getByRole('textbox', { name: 'ex.' }).fill('342');

    await page.getByRole('textbox', { name: 'MM' }).fill('10');

    await page.getByRole('textbox', { name: 'YYYY' }).fill('2018');

    await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();

    const message = await page.getByText('Order Placed!').textContent();
    await expect(message).toBe('Order Placed!');

    await page.getByRole('link', { name: 'Download Invoice' }).click();

    await page.pause();
});