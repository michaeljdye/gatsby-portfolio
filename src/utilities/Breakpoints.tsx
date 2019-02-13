import { css } from 'styled-components'
import Size from '../models/sizes'

const sizes: Size = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

// Media Queries

export const above = Object.keys(sizes).reduce(
  (acc: Size, label: string): Size => {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label] / 16}em) {
        ${css({}, ...args)}
      }
    `
    return acc
  },
  {}
)

export const below = Object.keys(sizes).reduce(
  (acc: Size, label: string): Size => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `
    return acc
  },
  {}
)
