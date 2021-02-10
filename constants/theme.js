import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  // colors
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#ABAFB8',
  gray: '#BEC1D2'
};

export const SIZES = {
  // global sizes
  base: 4,
  font: 12,
  radius: 10,
  padding: 10,

  // font sizes
  navTitle: 25,
  h1: 26,
  h2: 20,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height
};

export const FONTS = {
  navTitle: { fontSize: SIZES.navTitle, color: 'gray' },
  largeTitleBold: { fontSize: SIZES.h2 },
  h1: { fontSize: SIZES.h1, lineHeight: 26 },
  h2: { fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontSize: SIZES.h3, lineHeight: 18, fontWeight: '400' },
  h4: { fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontSize: SIZES.h5, lineHeight: 22 },
  body1: { fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontSize: SIZES.body3, lineHeight: 20 },
  body4: { fontSize: SIZES.body4, lineHeight: 20 },
  body5: { fontSize: SIZES.body5, lineHeight: 20 }
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
