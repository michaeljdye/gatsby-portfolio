import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Raleway', 'sans-serif'],
  bodyFontFamily: ['Roboto Condensed', 'sans-serif'],
  scaleRatio: 4.5,
})

typography.injectStyles()

export default typography
