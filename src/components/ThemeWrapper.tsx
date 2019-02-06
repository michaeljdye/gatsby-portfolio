import React from 'react'
import { ThemeProvider } from 'styled-components'
import ThemeInterface from '../models/theme'

const theme: ThemeInterface = {
  colorPrimary: '#6efaf1',
  colorSecondary: '#202833',
  colorTertiary: '#0b0c10',
  defaultPadding: '5rem',
}

const ThemeWrapper = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default ThemeWrapper
