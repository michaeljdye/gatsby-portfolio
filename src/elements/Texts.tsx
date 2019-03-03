import styled from 'styled-components'
import { defaultPadding, below } from '../utilities'

export const SiteTitle = styled.h1`
  margin: 0;

  ${below.phone`
    margin-bottom: 1.25rem;
  `}

  ${below.phone`
    text-align: center;
  `}

  .header__link {
    color: #fff;
    font-size: 1.75rem;
    text-decoration: none;
    margin: 0 0 0 6.5rem;

    ${below.phone`
    margin: 0;
  `}
  }
`

export const Paragraph = styled.p`
  margin-bottom: 10px;

  a {
    color: #fff;
    text-decoration: none;
    padding-left: 10px;
  }
`

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: calc(${defaultPadding} / 3);
  background: #000;
  color: #fff;
  text-align: center;
  font-size: 0.875rem;
`

export const NavLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin: 0 6.25rem 0 0;

  ${below.phone`
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
