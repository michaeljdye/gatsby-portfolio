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
              <a className="header__link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="header__link" href="#projects">
                Apps
              </a>
            </li>
            <li>
              <a className="header__link" href="#marketing-sites">
                Sites
              </a>
            </li>
            <li>
              <a className="header__link" href="#contact">
                Contact
              </a>
            </li>
          </NavLinks>
        </nav>
      </HeaderContainer>
    )}
  />
)

export default Header
