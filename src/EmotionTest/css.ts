import { css as style } from '@emotion/react'

export const css = {
  margin: {
    4: style({ margin: 4 }),
    8: style({ margin: 8 }),
    16: style({ margin: 16 }),
  },
  background: {
    pink: style({ background: '#ff8c8c' }),
    dark: style({ background: '#2B2B2B' }),
  },
  color: {
    pink: style({ color: '#ff8c8c' }),
    dark: style({ color: '#2B2B2B' }),
  },
  size: {
    large: style({ width: 500, height: 250, }),
    medium: style({ width: 250, height: 125, }),
    small: style({ width: 125, height: 75, }),
  },
} as const
