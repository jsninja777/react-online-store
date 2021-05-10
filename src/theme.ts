import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    accent: '#765959',
    primary: '#216468',
    base: '#DE8D79',
    text: '#505050',
    main: {
      500: '#216468',
    },
  },
  fonts: {
    heading: 'PT Serif',
    body: 'Poppins',
  },
  shadows: {
    outline: 'none',
    header:
      '0 4px 6px 2px rgb(222 141 121 / 15%), 0 2px 4px -1px rgb(222 141 121 / 6%)',
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'text',
      },
    },
    Text: {
      baseStyle: {
        color: 'text',
      },
    },
    Link: {
      baseStyle: {
        color: 'accent',
        _hover: {
          textDecoration: 'none',
          color: 'primary',
        },
      },
    },
    Button: {
      baseStyle: {
        width: '40',
        fontWeight: 'medium',
      },
    },
    Radio: {
      baseStyle: {},
    },
  },
})

export type ThemeInterface = typeof theme
