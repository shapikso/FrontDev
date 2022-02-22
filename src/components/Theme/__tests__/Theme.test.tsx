import React from 'react';
import {shallow, mount} from 'enzyme';
import Theme from "../Theme";
import {darkTheme, lightTheme} from "../../../constants/themes";
import {act} from "react-dom/test-utils";

describe('ListItem', ()=> {
    const props = {
        switchToLight: jest.fn(),
        switchToDark: jest.fn(),
        theme: lightTheme
    };

    it('should render correctly', () => {
        const component = shallow(<Theme {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('should change to dark theme', () => {
        const component = mount(<Theme {...props} />);
        act(() => {
            component.find('button').getElement().props.onClick();
        });
        expect(props.switchToDark).toHaveBeenCalled();
    });

    it('should change to light theme', () => {
        props.theme = darkTheme;
        const component = mount(<Theme {...props} />);
        act(() => {
            component.find('button').getElement().props.onClick();
        });
        expect(props.switchToLight).toHaveBeenCalled();
    });
});

