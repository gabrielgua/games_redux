import { useEffect, useState } from 'react'
import Header from './components/Header'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import Produtos from './containers/Produtos'
import { customConfigureStore } from './store'

const store = customConfigureStore()

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
