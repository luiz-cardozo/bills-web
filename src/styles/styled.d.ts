import 'styled-components';

declare module 'styled-components' {
  export interface IDefaultTheme {
    colors: {
      blue: {
        primary: string;
        secondary: string;
      };
      gray: {
        primary: string;
        secondary: string;
      };
      green: {
        primary: string;
        secondary: string;
        soft: string;
      };
      light: {
        primary: string;
        secondary: string;
      };
      orange: string;
      purple: {
        primary: string;
        secondary: string;
      };
      red: {
        primary: string;
        secondary: string;
      };
      white: string;
    };
  }
}
