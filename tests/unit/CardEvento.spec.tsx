import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CardEvento } from '../../src/components/CardEvento'
import moment from 'moment'
import React from 'react'

// URL de fallback usada no componente
const image =
  'https://cdn0.casamentos.com.br/vendor/3872/3_2/960/jpeg/whatsapp-image-2018-07-27-at-10-51-32-19_13_123872.jpeg'

describe('<CardEvento />', () => {
  it('Renderiza título, endereço e data formatada corretamente', () => {
    const props = {
      title: 'Aniversário de Ponteiro',
      endereco: 'Algum lugar de Sousa, 0',
      data: '01012025', // formato DDMMYYYY
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ89B0PHWe-tdpjhRnU1vRvd9GS_Jux4N1Zw&s',
    }

    render(<CardEvento {...props} />)

    expect(screen.getByText(props.title)).toBeDefined()

    expect(screen.getByText(props.endereco)).toBeDefined()

    const dataFormatada = moment(props.data, 'DDMMYYYY').format('DD/MM/YYYY')
    expect(screen.getByText(dataFormatada)).toBeDefined()

    const img = screen.getByRole('img') as HTMLImageElement
    expect(img.src).toBe(props.imagem)
  })

  it('Usa a imagem default caso quando não recebe a prop da mesma', () => {
    const props = {
      title: 'Evento Sem Imagem',
      endereco: 'Av. Sem Foto, 123',
      data: '02022025',
    }

    render(<CardEvento {...props} />)

    // Deve pegar o <img> e checar a src
    const img = screen.getByRole('img') as HTMLImageElement
    expect(img.src).toBe(image)
  })
})
