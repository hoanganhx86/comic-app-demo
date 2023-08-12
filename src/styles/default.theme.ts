import {
  BACKGROUND_DARK_COLOR,
  BACKGROUND_LIGHT_GREY,
  PRIMARY_COLOR,
  TEXT_COLOR,
} from './colors';

export const theme = {
  colors: {
    $text: TEXT_COLOR,
    $primary: PRIMARY_COLOR,
    $onPrimary: TEXT_COLOR, // Text or icon color on the primary color
    $background: '#fff',
    $onBackground: TEXT_COLOR, // Text or icon color on the background color

    $backgroundLightGrey: BACKGROUND_LIGHT_GREY,
    $backgroundDark: BACKGROUND_DARK_COLOR,

    $grey100: '#EDF0F3',
    $grey200: '#DDE3E9',
    $grey300: '#CED3DA',
    $grey400: '#92979E',
    $grey500: '#686D72',
    $grey600: '#383A3C',
    $grey700: '#26282A',
    $grey800: '#18191A',
    $grey900: '#0F1011',
  },
  space: {
    $0: 0,
    $1: 4,
    $2: 8,
    $2m: 12,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
  },
  roundness: {
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 10,
    $4: 12,
    $5: 16,
    $6: 18,
    $max: 1024,
  },
  fontSizes: {
    $0: 9,
    $1: 10,
    $2: 12,
    $3: 14,
    $4: 16,
    $5: 18,
    $6: 24,
    $7: 32,
  },
  iconSizes: {
    $0: 9,
    $1: 16,
    $2: 18,
    $3: 24,
    $4: 32,
    $5: 48,
    $6: 60,
  },
  text: {
    // TODO: font family
    h1: {
      fontSize: 24,
    },
    h2: {
      fontSize: 18,
    },
    h3: {
      fontSize: 16,
    },
    h4: {
      fontSize: 14,
    },
    p: {
      fontSize: 12,
    },
  },
};
