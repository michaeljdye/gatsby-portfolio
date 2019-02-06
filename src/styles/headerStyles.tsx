import styled from '../models/styledComponents'
import { media } from './mixins'

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: #0b0c10;
  padding: 20px 0;

  ${media.phone`
    grid-template-columns: 1fr;
  `}
`

export const SiteTitle = styled.h1`
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

export const NavLinks = styled.ul`
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
