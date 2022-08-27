import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { LocationContextProvider } from './contexts/LocationContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <LocationContextProvider>
          <Router />
        </LocationContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
