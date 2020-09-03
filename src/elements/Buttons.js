import styled from 'styled-components'
import { lighten } from 'polished'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { colorPrimary } from '../utilities'
import { Link } from 'gatsby'

const BUTTON_MODIFIERS = {
  small: () => `
  padding: 3px 10px;
  `,
}

export const Btn = styled.a`
  padding: 7px 15px;
  background: ${({ theme }) => theme.colorPrimary};
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none !important;
  transition: all 0.2s linear;
  margin-right: ${props => props.mr};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => lighten(0.2, theme.colorPrimary)};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`
