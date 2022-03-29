import { testSaga } from 'redux-saga-test-plan';
import * as actions from '../action';
import * as sagas from '../saga';
import * as actionTypes from '../actionTypes';
import axios from "axios";
import {URL} from "../../../constants/api";
import {showNotification} from "../../notify/action";
import {addTodo, checkTodo, deleteTodoAction} from "../action";
import {addTodoToList, checkTodoSaga, deleteTodoSaga, loadTodosList} from "../saga";
import {ADD_SAGA_TODO, CHECK_SAGA_TODO, DELETE_SAGA_TODO, LOAD_TODOS} from "../actionTypes";

describe('sagas tests', () => {
    describe('addTodo', () => {
        const data: ReturnType<typeof actions.addTodoSaga> = { type: actionTypes.ADD_SAGA_TODO, payload: {
            id: 1,
            title: 'delectus aut autem',
            completed: false} };
        const response = { headers: {}, data: {} };
        it('addTodo success', () => {
            testSaga(sagas.addTodoToList, data)
                .next()
                .call(axios.post, `${URL.baseUrl}${URL.getUrl}`, data.payload)
                .next(response)
                .put(showNotification('success','Added Successfully'))
                .next()
                .put(addTodo([data.payload]))
                .next()
                .isDone();
        });
        it('addTodo error', () => {
            const error: Error = { message: 'message', name: 'name' };
            testSaga(sagas.addTodoToList, data)
                .next()
                .call(axios.post, `${URL.baseUrl}${URL.getUrl}`, data.payload)
                .next(response)
                .throw(error)
                .put(showNotification('error','Error, not added'))
                .next()
                .isDone();
        });
    });
    describe('deleteTodo', () => {
        const data: ReturnType<typeof actions.deleteTodoActionSaga> = { type: actionTypes.DELETE_SAGA_TODO, payload: 1};
        const response = { headers: {}, data: {} };
        it('deleteTodo success', () => {
            testSaga(sagas.deleteTodoSaga, data)
                .next()
                .call(axios.delete, `${URL.baseUrl}/${data.payload}`)
                .next(response)
                .put(showNotification('success','Deleted Successfully'))
                .next()
                .put(deleteTodoAction(data.payload))
                .next()
                .isDone();
        });
        it('deleteTodo error', () => {
            const error: Error = { message: 'message', name: 'name' };
            testSaga(sagas.deleteTodoSaga, data)
                .next()
                .call(axios.delete, `${URL.baseUrl}/${data.payload}`)
                .next(response)
                .throw(error)
                .put(showNotification('error','Error, todo not deleted'))
                .next()
                .isDone();
        });
    });
    describe('checkTodo', () => {
        const data: ReturnType<typeof actions.checkTodoSaga> = { type: actionTypes.CHECK_SAGA_TODO, payload: 1};
        const response = { headers: {}, data: {} };
        it('checkTodo success', () => {
            testSaga(sagas.checkTodoSaga, data)
                .next()
                .call(axios.put, `${URL.baseUrl}/${data.payload}`)
                .next(response)
                .put(showNotification('success','Changed Successfully'))
                .next()
                .put(checkTodo(data.payload))
                .next()
                .isDone();
        });
        it('checkTodo error', () => {
            const error: Error = { message: 'message', name: 'name' };
            testSaga(sagas.checkTodoSaga, data)
                .next()
                .call(axios.put, `${URL.baseUrl}/${data.payload}`)
                .next(response)
                .throw(error)
                .put(showNotification('error','Error, todo not checked'))
                .next()
                .isDone();
        });
    });
    describe('watchers', () => {
        it('should watchers', () => {
            testSaga(sagas.todosSaga)
                .next()
                .takeEvery(LOAD_TODOS, loadTodosList)
                .next()
                .takeEvery(DELETE_SAGA_TODO, deleteTodoSaga)
                .next()
                .takeEvery(CHECK_SAGA_TODO, checkTodoSaga)
                .next()
                .takeEvery(ADD_SAGA_TODO, addTodoToList);
        });
    });
});

