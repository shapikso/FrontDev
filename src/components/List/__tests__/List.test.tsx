import React from 'react';
import {shallow} from 'enzyme';
import List from "../List";
import {mockStore, mountSmart} from "../../../helpers/testhelper";

describe('List', ()=> {
    const props = {
        todos: [
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
        ]
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
    it('should render correctly', () => {
        const component = shallow(<List {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('should render props correctly', () => {
        const component = mountSmart(<List {...props} />, store);
        expect(component.find('List').getElement().props.todos).toEqual(props.todos);
    });

    it('should render list items prop', () => {
        const component = mountSmart(<List {...props} />, store);
        expect(component.find('div').at(0).getElement().props.children.length).toEqual(props.todos.length);
    });
});

