import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: local('Pretendard-Regular'), url('Portfolio/fonts/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Medium';
    src: local('Pretendard-Medium'), url('Portfolio/fonts/Pretendard-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-SemiBold';
    src: local('Pretendard-SemiBold'), url('Portfolio/fonts/Pretendard-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Bold';
    src: local('Pretendard-Bold'), url('Portfolio/fonts/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  h1, h2, h3, h4, b {
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
    font-family: 'Pretendard-Regular';
    /* &::-webkit-scrollbar {
      display: none;
    } */
  }
  ul, ol{
    list-style: none; 
  }
  img, picture, svg, video, canvas{
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    background-repeat: no-repeat; 
    background-size: cover;
  }
  button, a {
    all: unset;
    cursor: pointer;
  }
  input {
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;