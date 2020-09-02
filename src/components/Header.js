import React, { useState, useRef, useEffect } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { NavLinks, SiteTitle, HeaderContainer } from '../elements'

const Header = () => {
  const headerRef = useRef()
  const [isSticky, setIsSticky] = useState(false)

  const handleScroll = () => {
    const headerHeight = headerRef.current.getBoundingClientRect().height
    const windowOffset = window.pageYOffset

    if (windowOffset > headerHeight) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
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
        <HeaderContainer ref={headerRef} isSticky={isSticky}>
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
                <Link to="/blog" className="header__link">
                  Blog
                </Link>
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
}

export default Header
