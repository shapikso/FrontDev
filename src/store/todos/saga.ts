import {call, takeEvery, put} from 'redux-saga/effects';
import {CHECK_SAGA_TODO, DELETE_SAGA_TODO, LOAD_TODOS, ADD_SAGA_TODO} from './actionTypes';
import axios from "axios";
import {addTodo, checkTodo, deleteTodoAction,} from "./action";
import {URL} from "../../constants/api";
import {showNotification} from "../notify/action";
import * as actions from "./action";

export function* loadTodosList() {
    try {
        const {data} = yield call(axios, `${URL.baseUrl}${URL.getUrl}`);
        yield put(addTodo(data));
    } catch {
        yield put(showNotification('error','Error, todos not loaded'));
    }
}

export function* addTodoToList({payload}: ReturnType<typeof actions.addTodoSaga>) {
    try {
        yield call(axios.post, `${URL.baseUrl}${URL.getUrl}`, payload);
        yield put(showNotification('success','Added Successfully'));
        yield put(addTodo([payload]));
    } catch {
        yield put(showNotification('error','Error, not added'));
    }
}

export function* deleteTodoSaga({payload}: ReturnType<typeof actions.deleteTodoActionSaga>) {
    try {
        yield call(axios.delete, `${URL.baseUrl}/${payload}`);
        yield put(showNotification('success','Deleted Successfully'));
        yield put(deleteTodoAction(payload));
    } catch {
        yield put(showNotification('error','Error, todo not deleted'));
    }
}

export function* checkTodoSaga({payload}: ReturnType<typeof actions.checkTodoSaga>) {
    try {
        yield call(axios.put, `${URL.baseUrl}/${payload}`);
        yield put(showNotification('success','Changed Successfully'));
        yield put(checkTodo(payload));
    } catch {
        yield put(showNotification('error','Error, todo not checked'));
    }
}

export function* todosSaga() {
    yield takeEvery(LOAD_TODOS, loadTodosList);
    yield takeEvery(DELETE_SAGA_TODO, deleteTodoSaga);
    yield takeEvery(CHECK_SAGA_TODO, checkTodoSaga);
    yield takeEvery(ADD_SAGA_TODO, addTodoToList);
}