import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  h1, h2, h3, b {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard-Regular', Arial, sans-serif;
    font-size: 16px;
  }
  *::before, *::after{
    box-sizing: border-box; 
  }
  body, html{
    height: 100%; 
    scroll-behavior: smooth; 
  }
  html:focus-within{
    scroll-behavior: smooth; 
  }
  body {
    margin: 0;
    padding: 0;
    background: #222831;
    color: #EEEEEE;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  ul[role='list'], ol[role='list']{
    list-style: none; 
  }
  img, picture, svg, video, canvas{
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    background-repeat: no-repeat; 
    background-size: cover;
  }
  button {
    all: unset;
    cursor: pointer;
  }
  input {
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;