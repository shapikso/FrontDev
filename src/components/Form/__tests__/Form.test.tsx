import React from 'react';
import {shallow, mount} from 'enzyme';
import Form from "../Form";
import {lightTheme} from "../../../constants/themes";
import {act} from "react-dom/test-utils";

describe('List', ()=> {
    const props = {
        addTodo: jest.fn(),
        showNotification: jest.fn(),
        theme: lightTheme
    };

    const setStateMock = jest.fn();
    beforeEach(() => {
        React.useState = jest.fn().mockReturnValue(['123', setStateMock]);
        Date.now = jest.fn(() => 1487076708000);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly', () => {
        const component = shallow(<Form {...props} />);
        expect(component).toMatchSnapshot();
    });

    it ('should set in state', () => {
        const component = mount(<Form {...props}/>);
        act(()=> {
            component.find('input').getElement().props.onChange({target:{ value : '123bla'}});
        });
        expect(setStateMock).toHaveBeenCalledWith('123bla');
    });

    it ('should add task', () => {
        const component = mount(<Form {...props}/>);
        act(()=> {
            component.find('button').getElement().props.onClick();
        });
        expect(props.addTodo).toHaveBeenCalledWith({title:'123', id: Date.now(), completed: false});
        expect(props.showNotification).toHaveBeenCalledWith('success','Added Successfully');
        expect(setStateMock).toHaveBeenCalled();
    });
});

