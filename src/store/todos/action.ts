import {ADD_CITY,LOAD_CITIES, ADD_SAGA_CITY, UPDATE_CITY, UPDATE_SAGA_CITY } from './actionTypes';
import {TTodos, TWeatherInfo} from "./types";
import {action} from "typesafe-actions";

export const addCity = (payload: TWeatherInfo[]) => action(ADD_CITY, payload);
export const updateCity = (payload: TWeatherInfo) => action(UPDATE_CITY, payload);
// export const checkTodo = (payload: number) => action(CHECK_TODO, payload);
// export const deleteTodoAction = (payload: number) => action(DELETE_TODO, payload);
export const loadCities = () => action(LOAD_CITIES);
export const addCitySaga = (payload: string) => action(ADD_SAGA_CITY, payload);
export const updateCitySaga = (payload: string) => action(UPDATE_SAGA_CITY, payload);
// export const checkTodoSaga = (payload: number) => action(CHECK_SAGA_TODO, payload);
// export const deleteTodoActionSaga = (payload: number) => action(DELETE_SAGA_TODO, payload);

