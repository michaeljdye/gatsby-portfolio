import { Link, StaticQuery, graphql } from 'gatsby'
import React from 'react'
import { NavLinks, SiteTitle, Container } from '../styles/headerStyles'

interface HeaderStatelessProps {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

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
    }: HeaderStatelessProps) => (
      <Container>
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
      </Container>
    )}
  />
)

export default Header
