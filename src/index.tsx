import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';
import { HashRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <GlobalStyle/>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);

