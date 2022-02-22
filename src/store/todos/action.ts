import {ADD_TODO, CHECK_TODO, DELETE_TODO} from './actionTypes';
import {TTodos} from "./types";
import {action} from "typesafe-actions";

export const addTodo = (payload: TTodos) => action(ADD_TODO, payload);
export const checkTodo = (payload: number) => action(CHECK_TODO, payload);
export const deleteTodoAction = (payload: number) => action(DELETE_TODO, payload);
