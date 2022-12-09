import { createGlobalStyle } from 'styled-components';
import { FontStyles } from './fonts';

export const GlobalStyles = createGlobalStyle`
  ${FontStyles}
  html, .App, body {
    margin: 0;
    font-family: Gilroy, Roboto, sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    color: ${({ theme }) => theme.main}
  }
  p,span,h1,h2,h3,h4,h5,h6{
      margin: 0;
  } 
  a {
    text-decoration: none;
  }
  button {
    outline: none;
    border: none;
    background-color: transparent;
  }
`;
