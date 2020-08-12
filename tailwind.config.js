module.exports = {
  theme: {
    borderWidth: {
      default: '1px',
      '0': '0'
    },
    colors: {
      white: '#F3F3F0',
      black: '#222222',
      cream: '#f0ebe6',
      grey: '#e8e8e8',
      'green-light': '#636a52',
      'green-dark': '#404534',
      blue: '#3F5561'
    },
    fontSize: {
      'xs': `${10/16}rem`,
      'sm': `${11/16}rem`,
      'md': `${12/16}rem`,
      'lg': `${14/16}rem`,
      'xl': `${16/16}rem`,
      'heading-s': `${24/16}rem`,
      'heading-m': `${32/16}rem`,
      'heading-l': `${48/16}rem`,
      'heading-xl': `${60/16}rem`,
    },
    lineHeight: {
      normal: 1.8,
      tight: 1.3
    },
    fontFamily: {
      sans: "'Avenir Next', 'Avenir', 'Gill Sans', sans-serif",
      display: "'Orelo', serif",
    }
  },
  variants: {
    fontFamily: [],
    leading: []
  },
  corePlugins: {
    float: false,
    clear: false,
    objectPosition: false,
    alignSelf: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridAutoFlow: false,
    fontStyle: false,
    fontWeight: false,
    letterSpacing: false,
    listStyleType: false,
    listStylePosition: false,
    placeholderColor: false,
    placeholderOpacity: false,
    textDecoration: false,
    textTransform: false,
    wordBreak: false,
    backgroundAttachment: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderStyle: false,
    divideWidth: false,
    divideColor: false,
    divideOpacity: false,
    borderCollapse: false,
    tableLayout: false,
    boxShadow: false,
    scale: false,
    skew: false,
    transformOrigin: false,
    resize: false,
    userSelect: false,
    strokeWidth: false,
    fill: false,
    stroke: false
  }
}
