import React, {ReactComponentElement} from "react";
import {Provider} from "react-redux";
import {mount} from "enzyme";
// @ts-ignore
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
import {BrowserRouter} from "react-router-dom";


export const mountSmart = (component: ReactComponentElement<any>, store: any) => {
    const core = <BrowserRouter><Provider store={store}>{component}</Provider></BrowserRouter>;
    return mount(core);
};

const middlewares = [thunk];
export const mockStore = configureStore(middlewares);


