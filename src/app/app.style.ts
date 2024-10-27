import { createGlobalStyle } from "styled-components";

/**
 * Need to re-check this if the resting is done properly
 */
export const AppStyles = createGlobalStyle`
@font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Italic.woff2') format('woff2');
    font-weight: 400;
    font-style: italic;
  }
  *, *::before,*::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0 solid transparent;
  }

  // prevent iOS font size change
  html {
    -webkit-text-size-adjust: 100%;
    font-size: 1em;
  }

  // reset body line-height
  body {
    min-height: 100vh;
    line-height: 1;
    text-rendering: optimizeSpeed;
    font-family: Inter;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
