import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 720px){
      font-size: 83.5%;
    }
    @media(max-width: 1024px){
      font-size: 93.5%;
    }
  }

  body {
    background: ${props => props.theme["--gray-200"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 400;
  }
`;