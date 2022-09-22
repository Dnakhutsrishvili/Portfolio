import { createGlobalStyle } from "styled-components";
import font from "../fonts/RobotoMono-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'RobotoMono-VariableFont_wght';
    src: local('RobotoMono-VariableFont_wght'),
    url(${font}) format('ttf'),

    font-weight: 300;
    font-style: normal;
}
  body {
    margin: 0;
    padding: 0;
    background: #9c86f7;
    font-family: RobotoMono-VariableFont_wght, Helvetica, Sans-Serif;
  }

`;

export default GlobalStyle;
