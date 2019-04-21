import styled from 'styled-components'
import { defaultPadding, below, colorPrimary } from '../utilities'

export const SiteTitle = styled.h1`
  display: flex;
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
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0;
    transition: all 0.2s ease;

    &:hover {
      border-bottom: 3px solid #82f9f1;
      padding-bottom: 5px;
    }
  }
`

// Paragraph
export const Paragraph = styled.p`
  margin-bottom: 10px;

  a {
    color: #fff;
    text-decoration: none;
    padding-left: 10px;
  }
`

// Heading 1

export const H1 = styled.h1`
  color: ${props => props.color};

  ${below.phone`
    font-size: 2.75rem !important;
  `}
`

// Heading 2
export const H2 = styled.h2`
  color: ${props => props.color} !important;
  text-align: ${props => props.align || 'left'};
  position: relative;
  width: fit-content;
  margin: ${props => props.margin || '0 auto'};

  &:after {
    content: '';
    display: block;
    position: absolute;
    background: ${colorPrimary};
    width: 40%;
    height: 5px;
    margin-top: 10px;
  }
`

// Heading 3
export const H3 = styled.h3`
  text-align: left;
  position: relative;

  span {
    position: relative;
    display: inline-block;
    z-index: 100;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: -10px;
      width: calc(100% + 20px);
      z-index: -1;
      height: 40%;
      background: ${colorPrimary};
      opacity: 0.5;
      transform: skewX(30deg);

      ${below.phone`
        width: 0;
        height: 0;
        background: none;
    `}
    }
  }

  ${below.phone`
    text-align: center;
`}
`
