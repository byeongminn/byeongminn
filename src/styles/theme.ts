import {
  BACKGROUND_COLOR_DARK,
  BACKGROUND_COLOR_LIGHT,
  GRAY100,
  GRAY300,
  GRAY400,
  GRAY500,
  GRAY600,
  GRAY700,
  GRAY800,
  GRAY900,
  HEADER_ACTIVE_COLOR_DARK,
  HEADER_ACTIVE_COLOR_LIGHT,
  HEADER_BACKGROUND_COLOR_DARK,
  HEADER_BACKGROUND_COLOR_LIGHT,
  HEADER_COLOR_DARK,
  HEADER_COLOR_LIGHT,
  TABLE_BACKGROUND_COLOR_DARK,
  TABLE_BACKGROUND_COLOR_LIGHT,
  TABLE_BORDER_COLOR,
} from 'constants/colors';
import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
  bgColor: BACKGROUND_COLOR_LIGHT,
  headerBgColor: HEADER_BACKGROUND_COLOR_LIGHT,
  headerBorderColor: GRAY700,
  headerColor: HEADER_COLOR_LIGHT,
  headerActiveColor: HEADER_ACTIVE_COLOR_LIGHT,
  sectionColor: GRAY900,
  detailsColor: GRAY800,
  tableBgColor: TABLE_BACKGROUND_COLOR_LIGHT,
  tableBorderColor: TABLE_BORDER_COLOR,
  tableNameColor: GRAY700,
  tableDescriptionColor: GRAY600,
  linearGradient: `linear-gradient(${BACKGROUND_COLOR_LIGHT}, ${BACKGROUND_COLOR_LIGHT}), linear-gradient(to bottom, ${GRAY400} 0%, ${BACKGROUND_COLOR_LIGHT} 90%);`,
  chipColor: GRAY600,
  chipBgColor: GRAY300,
  chipBorderColor: GRAY300,
  footerColor: GRAY600,
};

export const dark: DefaultTheme = {
  bgColor: BACKGROUND_COLOR_DARK,
  headerBgColor: HEADER_BACKGROUND_COLOR_DARK,
  headerBorderColor: GRAY100,
  headerColor: HEADER_COLOR_DARK,
  headerActiveColor: HEADER_ACTIVE_COLOR_DARK,
  sectionColor: GRAY400,
  detailsColor: GRAY500,
  tableBgColor: TABLE_BACKGROUND_COLOR_DARK,
  tableBorderColor: TABLE_BORDER_COLOR,
  tableNameColor: GRAY500,
  tableDescriptionColor: GRAY500,
  linearGradient: `linear-gradient(${BACKGROUND_COLOR_DARK}, ${BACKGROUND_COLOR_DARK}), linear-gradient(to bottom, ${GRAY700} 0%, ${BACKGROUND_COLOR_DARK} 90%);`,
  chipColor: GRAY300,
  chipBgColor: GRAY800,
  chipBorderColor: GRAY800,
  footerColor: GRAY500,
};
