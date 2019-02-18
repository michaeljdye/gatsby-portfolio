import styled from 'styled-components'
import { lighten } from 'polished'
import { applyStyleModifiers } from 'styled-components-modifiers'
import BtnProps from '../models/BtnProps'
import { colorPrimary } from '../utilities'

const BUTTON_MODIFIERS = {
  small: () => `
  padding: 3px 10px;
  `,
}

export const Btn = styled.a`
  padding: 7px 15px;
  background: ${colorPrimary};
  font-weight: 700;
  text-transform: uppercase;
  color: #111;
  text-decoration: none !important;
  transition: all 0.2s linear;
  margin-right: ${(props: BtnProps) => props.mr};

  &:hover {
    background: ${lighten(0.2, colorPrimary)};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`
