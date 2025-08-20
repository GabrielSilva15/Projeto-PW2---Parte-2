# Projeto PW2 - Sistema de Eventos

Este projeto é uma aplicação web desenvolvida com **React**, **TypeScript** e **Vite** para gerenciamento e visualização de eventos.

## Funcionalidades

- Visualização de eventos com título, endereço, data e imagem
- Cadastro de usuários
- Navegação simples entre páginas
- Componentização com React
- Testes unitários e E2E

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Styled-components](https://styled-components.com/)
- [React Router DOM](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Moment.js](https://momentjs.com/)
- [Vitest](https://vitest.dev/) (testes unitários)
- [Playwright](https://playwright.dev/) (testes E2E)

## Pré-requisitos

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone <url-do-repositorio>
   cd ProjetoPW2/Projeto-PW2
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

## Como rodar o projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse a url gerada no seu terminal.

## Testes

### Testes Unitários (Vitest)

Para rodar os testes unitários:

```bash
npm run test
```

### Testes E2E (Playwright)

Para instalar os drivers do browsers:

```bash
npx playwright install  
```

Para rodar os testes end-to-end:

```bash
npm run test:e2e
```

Para rodar com interface gráfica:

```bash
npm run test:e2e:ui
```

> O Playwright irá iniciar o servidor local automaticamente antes dos testes.
