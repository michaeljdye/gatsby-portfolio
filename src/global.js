import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { colorFour } from './utilities'

// Global styles should be used sparingly
// Use for things like CSS resets
const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    box-sizing: border-box;
  }

  *, *:bofore, *:after {
    box-sizing: inherit
  }

  a {
    text-decoration: none;
    color: ${colorFour}
  }
`

export default GlobalStyle
