import { css } from 'styled-components';

export const FontStyles = css`
  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/Gilroy-Regular.eot');
    src: local('Gilroy Regular'), local('Gilroy-Regular'),
      url('/fonts/Gilroy-Regular.woff2') format('woff2'),
      url('/fonts/Gilroy-Regular.woff') format('woff'),
      url('/fonts/Gilroy-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/Gilroy-Bold.eot');
    src: local('Gilroy Bold'), local('Gilroy-Bold'), url('/fonts/Gilroy-Bold.woff2') format('woff2'),
      url('/fonts/Gilroy-Bold.woff') format('woff'),
      url('/fonts/Gilroy-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`;
