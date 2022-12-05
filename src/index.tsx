import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <GlobalStyle/>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

