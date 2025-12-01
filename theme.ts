// theme.js
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const themeConfig: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config: themeConfig,
  colors: {
    primary: {
      100: '#E7D3BD',
      200: '#C7B2A8',
      300: '#B29572',
      400: '#2F2F2F', // antracitová
      500: '#847568',
    },
    secondary: {
      100: '#EAECEF',
      200: '#ADD8E6',
    },
    accent: {
      orange: '#E89E44', // oranžová
      pink: '#FFB6C1', // pastelově růžová
      yellow: '#FFD700', // pastelově žlutá
    },
    neutral: {
      100: '#F4F4F4',
      background: '#F0F0F0',
      text: '#343E3C',
    },
  },
  components: {
    Button: {
      variants: {
        solid: (props: { colorMode: 'light' | 'dark' }) => ({
          bg: props.colorMode === 'dark' ? 'primary.200' : 'accent.orange',
          color: props.colorMode === 'dark' ? 'white' : 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'accent.orangeLight' : 'accent.orangeLight',
            color: props.colorMode === 'dark' ? 'white' : 'white',
          },
          _active: {
            bg: props.colorMode === 'dark' ? 'primary.300' : 'primary.200',
            color: props.colorMode === 'dark' ? 'accent.orange' : 'accent.orange',
            transform: 'scale(0.98)',
          },
        }),
        outline: () => ({
          borderWidth: '1px',
          borderRadius: '0',
          _hover: {
            borderWidth: '1px',
            borderRadius: '0',
          },
          _active: {
            transform: 'scale(0.98)',
          },
        }),
        ghost: (props: { colorMode: 'light' | 'dark' }) => ({
          borderColor: props.colorMode === 'dark' ? 'white' : 'white',
          color: props.colorMode === 'dark' ? 'accent.orange' : 'accent.orange',
          _hover: {
            bg: props.colorMode === 'dark' ? 'white' : 'white',
            borderColor: props.colorMode === 'dark' ? 'white' : 'accent.orange',
            borderWidth: '1px',
            borderRadius: '0',
          },
          _active: {
            bg: props.colorMode === 'dark' ? 'primary.300' : 'primary.200',
            color: props.colorMode === 'dark' ? 'accent.orange' : 'accent.orange',
            transform: 'scale(0.98)',
          },
        }),
        link: (props: { colorMode: 'light' | 'dark' }) => ({
          borderColor: props.colorMode === 'dark' ? 'white' : 'white',
          color: props.colorMode === 'dark' ? 'accent.orange' : 'accent.orange',
          _hover: {},
          _active: {
            color: props.colorMode === 'dark' ? 'accent.orange' : 'accent.orange',
            transform: 'scale(0.98)',
          },
        }),
      },
      defaultProps: {
        size: 'md',
        variant: 'solid',
      },
    },
  },
});

export default customTheme;
