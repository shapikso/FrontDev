import {ActionType} from "typesafe-actions";
import { Reducer } from 'redux';
import {ADD_TODO, CHECK_TODO, DELETE_TODO} from './actionTypes';
import {TTodos} from './types';
import * as Actions from './action';

type TActions = typeof Actions;
type TTodosActions = ActionType<TActions>;
const initialState: TTodos[] = [{title: 'random Text', id: 1, completed: false}];

const todosRedux: Reducer<TTodos[], TTodosActions>  = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            return state.filter(el => el.id !== action.payload);
        case CHECK_TODO:
            return state.map(el => el.id === action.payload ? {...el, completed: !el.completed} : el);
        default:
            return state;
    }
};

export default todosRedux;
