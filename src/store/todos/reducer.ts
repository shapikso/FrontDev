import {ActionType} from "typesafe-actions";
import { Reducer } from 'redux';
import { ADD_CITY, UPDATE_CITY } from './actionTypes';
import { TWeatherInfo } from './types';
import * as Actions from './action';

type TActions = typeof Actions;
type TTodosActions = ActionType<TActions>;
const initialState: TWeatherInfo[] = [];

const weatherRedux: Reducer<TWeatherInfo[], TTodosActions>  = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            return [...state, ...action.payload];
        case UPDATE_CITY: {
            return state.map(el => el.id === action.payload.id ? {name: 'Dnipro', id:709930, icon:'01d', temperature: 25} : el);
        }
        default:
            return state;
    }
};

export default weatherRedux;
