import { createGlobalStyle } from 'styled-components';
import { theme } from './mainTheme';
import './fonts.css';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-weight: ${({ theme }) => theme.font.regular};
    font-size: ${({ theme }) => theme.font.normal};
    background-color: ${({ theme }) => theme.color.grey};
    font-family: ${({ theme }) => theme.font.primary};
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.primary};
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
