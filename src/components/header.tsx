import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import React from 'react'
import { media } from '../styles/mixins'

const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: #0b0c10;
  padding: 20px 0;

  ${media.phone`
    grid-template-columns: 1fr;
  `}
`

const SiteTitle = styled.h1`
  margin: 0;

  ${media.phone`
    margin-bottom: 1.25rem;
  `}

  ${media.phone`
    text-align: center;
  `}

  .header__link {
    color: #fff;
    text-decoration: none;
    margin: 0 0 0 6.5rem;

    ${media.phone`
    margin: 0;
  `}
  }
`

const NavLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin: 0 6.25rem 0 0;

  ${media.phone`
    justify-content: center;
    margin: 0;
  `}

  li {
    margin: 0;
  }

  li:not(:last-child) {
    margin-right: 2.5rem;
  }

  .header__link {
    color: #fff;
    text-decoration: none;
    margin: 0;
    transition: all 0.2s ease;

    &:hover {
      border-bottom: 1px solid #82f9f1;
      padding-bottom: 5px;
    }
  }
`

interface HeaderStatelessProps {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Header: React.SFC = () => (
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
