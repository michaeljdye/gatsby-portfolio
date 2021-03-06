import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { colorFour } from './utilities'

// Global styles should be used sparingly
// Use for things like CSS resets
const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    scroll-behavior: inherit !important;
  }

  p,
  a,
  li {
    font-size: 1.125rem;
  }

  a {
    text-decoration: none;
    color: ${colorFour};
  }
`

export default GlobalStyle
