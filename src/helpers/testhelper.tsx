import React, {ReactComponentElement} from "react";
import {Provider} from "react-redux";
import {mount} from "enzyme";
// @ts-ignore
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';


export const mountSmart = (component: ReactComponentElement<any>, store: any) => {
    const core = <Provider store={store}>{component}</Provider>;
    return mount(core);
};

const middlewares = [thunk];
export const mockStore = configureStore(middlewares);


