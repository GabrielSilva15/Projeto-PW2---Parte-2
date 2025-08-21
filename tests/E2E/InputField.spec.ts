import { test, expect } from "@playwright/test";

test.describe("Testes E2E da página de Login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  test("Deve renderizar o input de e-mail com placeholder correto", async ({
    page,
  }) => {
    const emailInput = page.getByPlaceholder("Digite seu e-mail...");
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute(
      "placeholder",
      "Digite seu e-mail..."
    );
  });

  test("Deve aceitar a digitação no input de e-mail", async ({ page }) => {
    const emailInput = page.getByPlaceholder("Digite seu e-mail...");
    await emailInput.fill("ponteiro@gmail.com");
    await expect(emailInput).toHaveValue("ponteiro@gmail.com");
  });

  test("Deve aceitar a digitação no input de senha", async ({ page }) => {
    const passwordInput = page.getByPlaceholder("Insira sua senha...");
    await passwordInput.fill("senha123");
    await expect(passwordInput).toHaveValue("senha123");
  });

  test("Deve realizar login com sucesso", async ({ page }) => {
    await page
      .getByPlaceholder("Digite seu e-mail...")
      .fill("teste123@gmail.com");
    await page.getByPlaceholder("Insira sua senha...").fill("123456");

    await page.getByRole("button", { name: /entrar/i }).click();

    await expect(page).toHaveURL("/");
  });

  test("Deve exibir mensagem de erro ao tentar login com senha inválida", async ({
    page,
  }) => {
    await page
      .getByPlaceholder("Digite seu e-mail...")
      .fill("teste123@gmail.com");
    await page.getByPlaceholder("Insira sua senha...").fill("errada");

    await page.getByRole("button", { name: /entrar/i }).click();

    await expect(
      page.getByText(/Credenciais incorretas. Tente novamente./i)
    ).toBeVisible();
  });
});
