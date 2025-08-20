import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // permite usar globals como `describe`, `it`, `expect`
    globals: true,
    // simula o DOM para testes de componentes React
    environment: 'jsdom',
    // inclua .tsx nos padrões de arquivo de teste
    include: ['tests/unit/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  // se você também estiver usando Vite para build
  esbuild: {
    // habilita TSX no build de testes
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
})
