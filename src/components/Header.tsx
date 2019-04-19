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
        <SiteTitle style={{ display: 'flex' }}>
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
