import { screen } from '@testing-library/react'
import Header from '..'
import { renderWithProvider } from '../../../utils/tests'

describe('Testes para o componente Header', () => {
  test('Deve renderizar corretamente', () => {
    renderWithProvider(<Header />)

    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar 2 itens no carrinho', () => {
    renderWithProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              titulo: 'FIFA 23',
              plataformas: ['Xbox Series S/X', 'Windows', 'PS5'],
              precoAntigo: 299,
              preco: 190,
              categoria: 'Esportes',
              imagem:
                'https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png?w=440&thumb=false'
            },
            {
              id: 2,
              titulo: 'Gotham Knights',
              plataformas: ['Xbox Series S/X', 'PS5', 'Windows'],
              precoAntigo: 299,
              preco: 150,
              categoria: 'Ação',
              imagem:
                'https://image.api.playstation.com/vulcan/ap/rnd/202204/1422/cXffCEiRPrxFapUs6zxJQp1k.png?w=440&thumb=false'
            }
          ]
        }
      }
    })

    expect(screen.getByTestId('carrinho-length').innerHTML).toContain('2 itens')
  })
})
