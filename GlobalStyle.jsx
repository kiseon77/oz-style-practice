import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
  }

  body {
    background-color: #121212;
  }
`;

export default GlobalStyle;
