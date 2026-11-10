import { test, expect } from '@playwright/test';
import { setTimeout } from 'timers';

test('github login scenario', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign in' }).click();

    await expect(page.locator('#login_field')).toBeVisible();
    await page.locator('#login_field').fill('nvaddi');
    await page.locator('#password').fill('daksha$43');
    //await page.getByRole('button', { name: 'commit' }).click();
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();

    //await expect(page.getByTestId('top-nav-right')).toBeVisible();

});