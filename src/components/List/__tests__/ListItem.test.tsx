import React from 'react';
import {shallow, mount} from 'enzyme';
import ListItem from "../ListItem";
import {lightTheme} from "../../../constants/themes";
describe('ListItem', ()=> {
    const props = {
        title: 'ToDo testing text' ,
        completed: false,
        checkTodo: jest.fn(),
        id: 20,
        deleteTodoAction: jest.fn(),
        showNotification: jest.fn(),
        theme: lightTheme
    };

    it('should render correctly', () => {
        const component = shallow(<ListItem {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('should render checked prop', () => {
        const component = mount(<ListItem {...props} />);
        expect(component.props().checked).toEqual(props.completed);
    });

    it('should render value', () => {
        const component = mount(<ListItem {...props} />);
        expect(component.find('p').text()).toEqual(props.title);
    });

    it('should render deleteTodo prop', () => {
        const component = mount(<ListItem {...props} />);
        component.find('button').at(0).getElement().props.onClick();
        expect(props.deleteTodoAction).toHaveBeenCalledWith(props.id);
        expect(props.showNotification).toHaveBeenCalledWith('success','Delete Successfully');
    });

    it('should render changeChecked prop', () => {
        const component = mount(<ListItem {...props} />);
        component.find('button').at(1).getElement().props.onClick();
        expect(props.checkTodo).toHaveBeenCalledWith(props.id);
        expect(props.showNotification).toHaveBeenCalledWith('success','Changed Successfully');
    });

});

