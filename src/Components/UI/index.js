import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     }

body {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-weight: regular;
    vertical-align: baseline;
    Font-Family: Roboto;
    line-height: 1.5em;
    letter-spacing: 0.5px;
    color: #292e36;
    background-color: #f7f7f7;
  }

  * { 
  box-sizing: border-box; 
  margin: 0; 
  padding: 0
 }

`;

export const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export const MainSection = styled.div``;
