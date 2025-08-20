import { test, expect } from '@playwright/test';

test.describe('Testes E2E do componente InputField', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.getByRole('button', { name: 'Cadastro' }).click();
    });

    test('deve renderizar o input com o label', async ({ page }) => {
        const label = page.getByLabel('E-mail');
        await expect(label).toBeVisible();
        await expect(label).toHaveAttribute('placeholder', 'Digite seu e-mail...');
    });

    test('deve aceitar a digitação no input', async ({ page }) => {
        const input = page.getByRole('textbox', { name: 'E-mail' });
        await input.fill('ponteiro@gmail.com');
        await expect(input).toHaveValue('ponteiro@gmail.com');
    });

    test('deve conter o placeholder correto', async ({ page }) => {
        const input = page.getByRole('textbox', { name: 'E-mail' });
        await expect(input).toHaveAttribute('placeholder', 'Digite seu e-mail...');
    });

});
