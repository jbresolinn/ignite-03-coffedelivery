import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media ${(props) => props.theme['mobile-bp']} {
        font-size: 75%;
    }
}

body {
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-800']};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
}

a, button {
    cursor: pointer;
}

button {
    border: 0;
}

button:disabled {
    cursor: not-allowed;
}
`
