import { DefaultTheme } from 'styled-components';

const palette = {
  /* grayscales */
  gray100: '#FDFDFD',
  gray200: '#F7F6F6',
  gray300: '#EAEAEA',
  gray400: '#E1E5ED',
  gray500: '#D2D4DA',
  gray600: '#696969',
  gray700: '#4D4D4D',
  gray800: '#333333',
  gray900: '#191919',
};

export const light: DefaultTheme = {
  bgColor: '#ffffff',
  headerBorderColor: palette.gray700,
  headerColor: palette.gray900,
  headerActiveColor: palette.gray600,
  mobileNavBgColor: 'rgba(255, 255, 255, 0.95)',
  mobileNavShadow: '-4px 0px 24px 0px rgba(0, 0, 0, 0.05)',
  mobileNavColor: palette.gray900,
  sectionColor: palette.gray900,
  detailsColor: palette.gray800,
  tableBgColor: '#fafafa',
  tableBorderColor: palette.gray500,
  tableNameColor: palette.gray700,
  tableDescriptionColor: palette.gray600,
  linearGradient: `linear-gradient(#ffffff, #ffffff), linear-gradient(to bottom, ${palette.gray400} 0%, #ffffff 90%);`,
  chipColor: palette.gray600,
  chipBgColor: palette.gray300,
  chipBorderColor: palette.gray300,
  footerColor: palette.gray600,
};

export const dark: DefaultTheme = {
  bgColor: '#1f1f1f',
  headerBorderColor: palette.gray100,
  headerColor: palette.gray100,
  headerActiveColor: palette.gray500,
  mobileNavBgColor: 'rgba(31, 31, 31, 0.95)',
  mobileNavShadow: '-4px 0px 24px 0px rgba(255, 255, 255, 0.05)',
  mobileNavColor: palette.gray400,
  sectionColor: palette.gray400,
  detailsColor: palette.gray500,
  tableBgColor: '#232424',
  tableBorderColor: palette.gray500,
  tableNameColor: palette.gray500,
  tableDescriptionColor: palette.gray500,
  linearGradient: `linear-gradient(#1f1f1f, #1f1f1f), linear-gradient(to bottom, ${palette.gray700} 0%, #1f1f1f 90%);`,
  chipColor: palette.gray300,
  chipBgColor: palette.gray800,
  chipBorderColor: palette.gray800,
  footerColor: palette.gray600,
};
