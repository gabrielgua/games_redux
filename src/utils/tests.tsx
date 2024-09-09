import { render, RenderOptions } from '@testing-library/react'
import { AppStore, customConfigureStore, PreloadedState } from '../store'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState
  store?: AppStore
}

export const renderWithProvider = (
  element: React.ReactElement,
  {
    preloadedState,
    store = customConfigureStore(preloadedState),
    ...optional
  }: ExtendedRenderOptions = {}
) => {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(element, {
      wrapper: Wrapper,
      ...optional
    })
  }
}
