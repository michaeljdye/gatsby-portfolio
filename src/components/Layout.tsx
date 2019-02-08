import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import ThemeWrapper from './ThemeWrapper'
import Header from './Header'
import Footer from './Footer'

const Layout: React.FunctionComponent<{}> = ({ children }) => (
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
      <ThemeWrapper>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </ThemeWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
