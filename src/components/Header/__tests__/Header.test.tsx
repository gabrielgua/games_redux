import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../store'
import Header from '..'

describe('Testes para o componente Header', () => {
  test('Deve renderizar corretamente', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
})
