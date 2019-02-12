import { Link, StaticQuery, graphql } from 'gatsby'
import React from 'react'
import HeaderProps from '../models/HeaderProps'
import { NavLinks, SiteTitle, HeaderContainer } from '../elements'

const Header: React.SFC<{}> = () => (
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
    }: HeaderProps) => (
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
                Projects
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
