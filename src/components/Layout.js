import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import SEO from './SEO'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  const lightTheme = {
    colorPrimary: '#00e9ec',
    colorSecondary: '#202833',
    colorTertiary: '#845DC0',
    colorDark: '#0b0c10',
    colorLight: '#fff',
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
        <ThemeProvider theme={lightTheme}>
          <SEO />
          <Header />
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
