const spacings = {
  xsmal: '1.4rem',
  small: '1.6rem',
  medium: '2.4rem',
  large: '3.2rem',
  xlarge: '4.0rem',
  xxlarge: '4.8rem',
  huge: '5.6rem',
  xhuge: '6.4rem',
};

const fonts = {
  family: { default: "'Open Sans', sans-serif" },
  sizes: {
    xxsmall: '1.1rem',
    xsmall: '1.4rem',
    small: '1.8rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
};

const icons = {
  bgColors: {
    calories: '#FFC22B',
    carb: '#F8593B',
    proteins: '#3B70F8',
    fats: '#2ECC71',
  },
};

export const lightTheme = {
  background: '#F2F2F2',
  white: '#fff',
  menuIcon: '#000',
  primaryText: '#1E1E1E',
  heading: '#25CA2B',
  buttonCall: '#F84D4D',
  fonts: fonts,
  spacings: spacings,
  icons: icons,

  media: {
    lteMedium: '(max-width: 768px)',
  },
};
export const darkTheme = {
  background: '#1E1E1E',
  white: '#fff',
  menuIcon: '#fff',
  primaryText: '#f2f2f2',
  heading: '#FB6D1D',
  buttonCall: '#2BB415',
  fonts: fonts,
  spacings: spacings,
  icons: icons,

  media: {
    lteMedium: '(max-width: 768px)',
  },
};
