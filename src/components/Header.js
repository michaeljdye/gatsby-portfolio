import { Link, StaticQuery, graphql } from 'gatsby'
import React from 'react'
import { NavLinks, SiteTitle, HeaderContainer } from '../elements'

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title },
      },
    }) => (
      <HeaderContainer>
        <SiteTitle>
          <Link className="header__link" to="/">
            {title}
          </Link>
        </SiteTitle>
        <nav>
          <NavLinks>
            <li>
              <Link className="header__link" to="/#about">
                About
              </Link>
            </li>
            <li>
              <Link className="header__link" to="/#projects">
                Apps
              </Link>
            </li>
            <li>
              <Link className="header__link" to="/#marketing-sites">
                Sites
              </Link>
            </li>
            <li>
              <Link className="header__link" to="/#contact">
                Contact
              </Link>
            </li>
          </NavLinks>
        </nav>
      </HeaderContainer>
    )}
  />
)

export default Header
