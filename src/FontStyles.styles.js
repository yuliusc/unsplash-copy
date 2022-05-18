import { createGlobalStyle } from "styled-components";
import tex from "./assets/fonts/tex-gyre-adventor.regular.otf";

const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'tex';
    src: url(${tex}) format('opentype');
  }

`;

export default FontStyles;
