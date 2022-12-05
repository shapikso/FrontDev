import {ActionType} from "typesafe-actions";
import { Reducer } from 'redux';
import { ADD_CITY, GET_CITY, UPDATE_CITY, DELETE_CITY } from './actionTypes';
import { TWeatherReduce, TWeatherRespond } from './types';
import * as Actions from './action';

type TActions = typeof Actions;
type TTodosActions = ActionType<TActions>;
const initialState: TWeatherReduce = { weather:[], singleWeather: <TWeatherRespond>{}};

const weatherRedux: Reducer<TWeatherReduce, TTodosActions>  = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            return {...state, weather:[...state.weather, ...action.payload]};
        case UPDATE_CITY: {
            return {...state, weather:state.weather.map(el => el.id === action.payload.id ? action.payload : el)};
        }
        case DELETE_CITY: {
            return {...state, weather:state.weather.filter(el => el.id !== action.payload)};
        }
        case GET_CITY:
            return {...state, singleWeather:{...action.payload}};
        default:
            return state;
    }
};

export default weatherRedux;
