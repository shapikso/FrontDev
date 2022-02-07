import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from "./GlobalStyles";
import {ThemeContextProvider} from "./themeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
        <GlobalStyle/>
        <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
