import { Platform, Dimensions } from 'react-native';
import { Header as ReactNavigationHeader } from 'react-navigation';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;

const colors = {
  lightBlue: '#2B89A3',
  darkBlue: '#0C2A45',
  white: '#FFFFFF',
  gray5: '#F7F7F7',
  gray20: '#E5E5EA',
  gray30: '#D1D1D6',
  gray40: '#C7C7CC',
  gray60: '#8E8E93',
  gray70: '#61616A',
  gray80: '#35353F',
  gray90: '#16161F',
  black: '#000000',
};

const fonts = {
  android: 'Roboto',
  ios: 'System',
};

export default {
  deviceHeight,

  deviceWidth,

  platform,

  colors: {
    primary: colors.lightBlue,
    secondary: colors.darkBlue,
    white: colors.white,
    gray5: colors.gray5,
    gray20: colors.gray20,
    gray30: colors.gray30,
    gray40: colors.gray40,
    gray60: colors.gray60,
    gray70: colors.gray70,
    gray80: colors.gray80,
    gray90: colors.gray90,
    black: colors.black,
  },

  fonts: {
    defaultFontFamily: platform === 'ios' ? fonts.ios : fonts.android,
    fontSizeBase: 15,
    defaultColor: colors.darkBlue,
  },

  app: {
    defaultBackgroundColor: colors.gray5,
  },
};
