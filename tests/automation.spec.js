import { test } from '@playwright/test';
import { ObjectMapper } from '../pages/ObjectMapper.js';

test('Login to automation practice shopping website ', async ({ page }) => {
    const objectMapper = new ObjectMapper(page);

    await objectMapper.getLaunchAppInstance().launchApplicationURL();
    await objectMapper.getLoginPageInstance().loginToApplication();
    await objectMapper.getProductsPageInstance().navigateToProducts();
    await objectMapper.getcartPageInstance().addItemToCart();
    await objectMapper.getCheckoutPageInstance().checkoutAndPlaceOrder();
    await objectMapper.getPaymentPageInstance().paymentAndConfirmOrder();

    //await page.getByRole('link', { name: 'Download Invoice' }).click();

});