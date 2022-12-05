import React from 'react';
import ListItem from "../ListItem";
import {mountSmart, mockStore} from "../../../helpers/testhelper";
import * as redux from "react-redux";

describe('ListItem', ()=> {
    const props = {
        icon:  "01n",
        id: 709930,
        name: "Dnipro",
        temperature: -20,
    };
    const store = mockStore({
        weather: {
            weather: [
                {
                    id: 709930,
                    name: 'Dnipro',
                    temperature: -4.21,
                    icon: '01n'
                },
                {
                    id: 2147714,
                    name: 'Sydney',
                    temperature: 17.91,
                    icon: '04n'
                }
            ]
        }
    });
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    // @ts-ignore
    const setStateMock = jest.fn();
    beforeEach(() => {
        useDispatchSpy.mockReturnValue(mockDispatchFn);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should render correctly', () => {
        const component = mountSmart(<ListItem {...props} />, store);
        expect(component).toMatchSnapshot();
    });

    it('should render temperature', () => {
        const component = mountSmart(<ListItem {...props} />, store);
        expect(component.find('div').at(1).getElement().props.children[0]).toEqual(props.temperature.toString());
    });

    it('should render city name', () => {
        const component = mountSmart(<ListItem {...props} />, store);
        console.log(component.find('div').at(2).getElement())
        expect(component.find('div').at(2).getElement().props.children).toEqual(props.name);
    });

    it('should render icon', () => {
        const component = mountSmart(<ListItem {...props} />, store);
        //console.log(component.debug());
        expect(component.find('img').getElement().props.src).toEqual(`http://openweathermap.org/img/wn/${props.icon}@2x.png`);
    });

    it('should render deleteTodo prop', () => {
        const component = mountSmart(<ListItem {...props} />, store);
        component.find('button').at(0).getElement().props.onClick();
        expect(mockDispatchFn).toBeCalled();
    });

    it('should render changeChecked prop', () => {
        const component = mountSmart(<ListItem {...props} />, store);
        component.find('button').at(1).getElement().props.onClick();
        expect(mockDispatchFn).toBeCalled();
    });

});
