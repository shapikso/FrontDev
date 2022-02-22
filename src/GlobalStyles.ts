import { createGlobalStyle } from "styled-components";
import {TTheme} from "./store/theme/types";


type TPropstheme = {
    theme: TTheme
}

export const GlobalStyle = createGlobalStyle<TPropstheme>`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body{
    height: 100vh;
    width:  100%;
    background: linear-gradient(to bottom, ${({theme})=> theme.backgroundFirst} 0%, ${({theme})=> theme.backgroundSecond} 100%);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;
