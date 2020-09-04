import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import SEO from './SEO'
import Header from './Header'
import Footer from './Footer'
import { lightTheme, darkTheme } from '../utils'

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)

  const handleTheme = e => {
    e.preventDefault()

    setTheme(prevTheme => (prevTheme.type === 'light' ? darkTheme : lightTheme))
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={({ site }) => (
        <ThemeProvider theme={theme}>
          <SEO />
          <Header />
          <button onClick={handleTheme}>Toggle Theme</button>
          {children}
          <Footer />
        </ThemeProvider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
