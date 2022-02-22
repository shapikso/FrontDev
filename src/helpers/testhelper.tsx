import React, {ReactComponentElement} from "react";
import {Provider} from "react-redux";
import {mount} from "enzyme";
// @ts-ignore
import configureStore from "redux-mock-store";

export const mountSmart = (component: ReactComponentElement<any>, store: any) => {
    const core = <Provider store={store}>{component}</Provider>;
    return mount(core);
};

export const mockStore = configureStore();


