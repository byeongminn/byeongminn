import 'styled-components';

declare module 'styled-components' {
  export interface DefualtTheme {
    bgColor: string;
    headerBgColor: string;
    headerColor: string;
    headerActiveColor: string;
    sectionColor: string;
    detailsColor: string;
    tableBgColor: string;
    tableBorderColor: string;
    tableNameColor: string;
    tableDescriptionColor: string;
    footerColor: string;
  }

  export interface DefaultMedia {
    device: {
      mobile: string;
      tablet: string;
      labtop: string;
      desktop: string;
    };
  }
}
