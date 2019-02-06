import styled from 'styled-components'
import { media } from '../utils/'

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  height: fit-content;
  padding: ${props => props.theme.defaultPadding} 0;
  background: ${props => props.theme.colorTertiary};
  color: #fff;

  ${media.phone`
    grid-template-columns: 1fr;
    grid-row-gap: 1.875rem;
    text-align: center;
    `}

  h3 {
    font-size: 1.935rem;
  }

  h4 {
    font-size: 1.563rem;
  }
`

export const SocialIcons = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    color: #fff;
    text-decoration: none;
  }

  span {
    padding-left: 10px;
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
  padding: calc(${props => props.theme.defaultPadding} / 3);
  background: #000;
  color: #fff;
  text-align: center;
  font-size: 0.875rem;
`
