import 'styled-components';

declare module 'styled-components' {
  export interface DefualtTheme {
    bgColor: string;
    headerBgColor: string;
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
    footerColor: string;
  }

  export interface DefaultMedia {
    device: {
      mobile: string;
      tablet: string;
    };
  }
}
