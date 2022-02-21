import {ADD_TODO, CHECK_TODO, DELETE_TODO} from './actionTypes';

export const addTodo = (todo) => ({type:ADD_TODO, payload: todo});
export const checkTodo = (id) => ({type:CHECK_TODO, payload: id});
export const deleteTodoAction = (id) => ({type:DELETE_TODO, payload: id});
