import {ADD_CITY, DELETE_CITY, GET_CITY, UPDATE_CITY} from './actionTypes';
import {TWeatherInfo, TWeatherRespond} from "./types";
import {action} from "typesafe-actions";

export const addCity = (payload: TWeatherInfo[]) => action(ADD_CITY, payload);
export const updateCity = (payload: TWeatherInfo) => action(UPDATE_CITY, payload);
export const getCityInfo = (payload: TWeatherRespond) => action(GET_CITY, payload);
export const deleteCity = (payload: number) => action(DELETE_CITY, payload);


