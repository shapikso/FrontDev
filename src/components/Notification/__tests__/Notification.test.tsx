import React from 'react';
import {shallow, mount} from 'enzyme';
import Notification from "../Notification";

describe('Notification', ()=> {
    const props = {
        hiddeNotification: jest.fn(),
        notification:{type: 'success', message:'Added successfully'}
    };

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly', () => {
        const component = shallow(<Notification {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('should hidde notificator', () => {
        mount(<Notification {...props} />);
        expect(props.hiddeNotification).not.toBeCalled();
        jest.runAllTimers();
        expect(props.hiddeNotification).toHaveBeenCalledTimes(1);
    });
    
    it('should render notificator', () => {
        const component = shallow(<Notification {...props} />);
        expect(component.find('p').text()).toEqual(props.notification.message);
    });

    it('should not render notificator', () => {
        props.notification.type = '';
        const component = shallow(<Notification {...props} />);
        expect(component.isEmptyRender()).toBe(true);
    });
});

