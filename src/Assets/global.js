import { createGlobalStyle } from 'styled-components';
import img from './img/Fondo_04.jpg';

const GlobalStyles = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}

  // background: url(${img}) no-repeat center center fixed; 
  // -webkit-background-size: cover;
  // -moz-background-size: cover;
  // -o-background-size: cover;
  // background-size: cover;


}
*, *::after, *::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.dark};
  height: 100vh;
  width: 100vw;
  transition: background 0.7s ease-out;
  -webkit-tap-highlight-color: transparent;
  & >div{
    width:100vw;
    height:100vh;
  }
}
h1 {
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
}
img {
  border-radius: 0.5rem;
  height: auto;
  width: 8rem;
}
div {
  text-align: center;
}

a {
  color: ${({ theme }) => theme.colors.a};
  text-decoration: none;
}
`

export default GlobalStyles;