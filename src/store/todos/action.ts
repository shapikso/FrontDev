import {ADD_SAGA_TODO, ADD_TODO, CHECK_SAGA_TODO, CHECK_TODO, DELETE_SAGA_TODO, DELETE_TODO, LOAD_TODOS} from './actionTypes';
import {TTodos} from "./types";
import {action} from "typesafe-actions";

export const addTodo = (payload: TTodos[]) => action(ADD_TODO, payload);
export const checkTodo = (payload: number) => action(CHECK_TODO, payload);
export const deleteTodoAction = (payload: number) => action(DELETE_TODO, payload);
export const loadTodo = () => action(LOAD_TODOS);
export const addTodoSaga = (payload: TTodos) => action(ADD_SAGA_TODO, payload);
export const checkTodoSaga = (payload: number) => action(CHECK_SAGA_TODO, payload);
export const deleteTodoActionSaga = (payload: number) => action(DELETE_SAGA_TODO, payload);

