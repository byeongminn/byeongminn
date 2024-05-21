import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    headerBorderColor: string;
    headerColor: string;
    headerActiveColor: string;
    mobileNavBgColor: string;
    mobileNavShadow: string;
    mobileNavColor: string;
    sectionColor: string;
    detailsColor: string;
    tableBgColor: string;
    tableBorderColor: string;
    tableNameColor: string;
    tableDescriptionColor: string;
    linearGradient: string;
    chipColor: string;
    chipBgColor: string;
    chipBorderColor: string;
    outputColor: string;
    outputBgColor: string;
    outputBorderColor: string;
    footerColor: string;
  }

  export interface DefaultMedia {
    device: {
      mobile: string;
      tablet: string;
    };
  }
}
