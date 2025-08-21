import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { InputField } from "../../src/components/InputField/InputField";

describe("<InputField />", () => {
  it("Renderiza o input e o label corretamente", () => {
    render(<InputField name="username" label="Usuário" />);

    // label aparece
    expect(screen.getByText("Usuário")).toBeDefined();

    // input aparece
    expect(screen.getByRole("textbox")).toBeDefined();
  });

  it("Aplica o tipo passado na prop 'type'", () => {
    render(<InputField name="password" label="Senha" type="password" />);

    const input = document.querySelector(
      "input[name='password']"
    ) as HTMLInputElement;

    expect(input.type).toBe("password");
  });

  it("Aceita e exibe valor passado na prop 'value'", () => {
    render(
      <InputField
        name="email"
        label="Email"
        value="teste@teste.com"
        onChange={() => {}}
      />
    );

    const input = screen.getByDisplayValue(
      "teste@teste.com"
    ) as HTMLInputElement;
    expect(input.value).toBe("teste@teste.com");
  });

  it("Permite passar placeholder corretamente", () => {
    render(
      <InputField
        name="telefone"
        label="Telefone"
        placeholder="Digite seu telefone"
      />
    );

    const input = screen.getByPlaceholderText(
      "Digite seu telefone"
    ) as HTMLInputElement;
    expect(input).toBeDefined();
  });

  it("Permite usar props do input como 'required' ou 'disabled'", () => {
    render(<InputField name="nome" label="Nome" required disabled />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.required).toBe(true);
    expect(input.disabled).toBe(true);
  });
});
