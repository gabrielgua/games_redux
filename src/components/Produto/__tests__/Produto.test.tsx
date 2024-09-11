import { fireEvent, screen } from '@testing-library/react'
import Produto from '..'
import { renderWithProvider } from '../../../utils/tests'

const game = {
  id: 1,
  titulo: 'FIFA 23',
  plataformas: ['Xbox Series S/X', 'Windows', 'PS5'],
  precoAntigo: 299,
  preco: 190,
  categoria: 'Esportes',
  imagem:
    'https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png?w=440&thumb=false'
}

describe('Testes para o componente Produto', () => {
  test('Deve renderizar corretamente', () => {
    renderWithProvider(<Produto game={game} />)
    expect(screen.getByText('FIFA 23')).toBeInTheDocument()
  })

  test('Deve adicionar um item ao carrinho', () => {
    const { store } = renderWithProvider(<Produto game={game} />)
    const btn = screen.getByTestId('btn-add-produto')
    fireEvent.click(btn)

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
