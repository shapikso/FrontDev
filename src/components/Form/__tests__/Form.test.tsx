import React from 'react';
import Form from "../Form";
import {act} from "react-dom/test-utils";
import {mockStore, mountSmart} from "../../../helpers/testhelper";
import * as redux from 'react-redux';

describe('List', ()=> {
    const props = {
    };
    const store = mockStore({todos: [
        {
            title: 'random Text',
            id: 1,
            completed: false
        },
        {
            title: 'aaaa',
            id: 1645526601227,
            completed: false
        }
    ]});
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    // @ts-ignore
    const setStateMock = jest.fn();
    beforeEach(() => {
        React.useState = jest.fn().mockReturnValue(['123', setStateMock]);
        Date.now = jest.fn(() => 1487076708000);
        useDispatchSpy.mockReturnValue(mockDispatchFn);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly', () => {
        const component = mountSmart(<Form {...props} />,store);
        expect(component).toMatchSnapshot();
    });

    it ('should set in state', () => {
        const component = mountSmart(<Form {...props}/>,store);
        act(()=> {
            component.find('input').getElement().props.onChange({target:{ value : '123bla'}});
        });
        expect(setStateMock).toHaveBeenCalledWith('123bla');
    });

    it ('should add task', () => {
        const component = mountSmart(<Form {...props}/>, store);
        act(()=> {
            component.find('button').getElement().props.onClick();
        });
        expect(mockDispatchFn).toHaveBeenCalled();
        expect(setStateMock).toHaveBeenCalled();
    });
});
