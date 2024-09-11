import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen, waitFor } from '@testing-library/react'
import Produtos from '..'
import { renderWithProvider } from '../../../utils/tests'

const mocks = [
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
  },
  {
    id: 3,
    titulo: 'The Witcher 3',
    plataformas: ['Xbox Series S/X', 'PS5', 'Windows'],
    precoAntigo: 349,
    preco: 140.9,
    categoria: 'Ação',
    imagem:
      'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png?w=440&thumb=false'
  }
]

const server = setupServer(
  rest.get('https://localhost:4000/produtos', (req, res, context) => {
    return res(context.json(mocks))
  })
)

describe('Testes para o componente de listagem de produtos', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Deve renderizar o texto de carregamento', () => {
    renderWithProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  test('Deve renderizar a listagem de produtos', async () => {
    renderWithProvider(<Produtos />)
    await waitFor(() => {
      expect(screen.getByText('FIFA 23')).toBeInTheDocument()
    })
  })
})
