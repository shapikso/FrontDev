const initialState = [{title: 'random Text', id: 1, checked: false}];
import {ADD_TODO, CHECK_TODO, DELETE_TODO} from './actionTypes';

const todosRedux = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TODO:
            return [...state, payload];
        case DELETE_TODO:
            return state.filter(el => el.id !== payload);
        case CHECK_TODO:
            return state.map(el => el.id === payload ? {...el, checked: !el.checked} : el);
        default:
            return state;
    }
};

export default todosRedux;
