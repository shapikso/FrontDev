import React from 'react';
import {shallow} from 'enzyme';
import List from "../List";
import {mockStore, mountSmart} from "../../../helpers/testhelper";
import {BrowserRouter, Router} from "react-router-dom";

describe('List', ()=> {
    const props = {
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
    it('should render correctly', () => {
        const component = shallow(<List {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('should render props correctly', () => {
        const component = mountSmart(<List {...props} />, store);
        expect(component.find('List').getElement().props.weather).toEqual(props.weather);
    });

    it('should render list items prop', () => {
        const component = mountSmart(<List {...props} />, store);
        expect(component.find('div').at(0).getElement().props.children.length).toEqual(props.weather.length);
    });
});
