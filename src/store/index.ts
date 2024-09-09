import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import api from '../services/api'

const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
})

type PreloadedStateFromReducer<R extends Reducer<any, any, any>> =
  R extends Reducer<any, any, infer P> ? P : never

export type PreloadedState = PreloadedStateFromReducer<typeof rootReducer>

export const customConfigureStore = (preloadedState?: PreloadedState) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState: preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
