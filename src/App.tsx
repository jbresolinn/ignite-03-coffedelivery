import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext'
import { LocationContextProvider } from './contexts/LocationContext'
import { OrderContextProvider } from './contexts/OrderContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <OrderContextProvider>
            <LocationContextProvider>
              <Router />
            </LocationContextProvider>
          </OrderContextProvider>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
