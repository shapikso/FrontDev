import {call, takeEvery, put} from 'redux-saga/effects';
import {CHECK_SAGA_TODO, DELETE_SAGA_TODO, LOAD_TODOS, ADD_SAGA_TODO} from '../actionTypes';
import axios from "axios";
import {addTodo, checkTodo, deleteTodoAction,} from "../action";
import {URL} from "../../../constants/api";
import {TTodos} from "../types";
import {showNotification} from "../../notify/action";

type TAction = {
    payload : number | TTodos
}

function* loadTodosList() {
    try {
        const {data} = yield call(axios, `${URL.baseUrl}${URL.getUrl}`);
        yield put(addTodo(data));
    } catch {
        console.log('error');
    }
}

function* addTodoToList({payload}: TAction) {
    try {
        yield call(axios.post, `${URL.baseUrl}${URL.getUrl}`, payload);
        yield put(showNotification('success','Added Successfully'));
        yield put(addTodo([<TTodos>payload]));
    } catch {
        yield put(showNotification('error','Error, not added'));
    }
}

function* deleteTodoSaga({payload}: TAction) {
    try {
        yield call(axios.delete, `${URL.baseUrl}/${payload}`);
        yield put(showNotification('success','Deleted Successfully'));
        yield put(deleteTodoAction(<number>payload));
    } catch {
        yield put(showNotification('error','Error, todo not deleted'));
    }
}

function* checkTodoSaga({payload}: TAction) {
    try {
        yield call(axios.put, `${URL.baseUrl}/${payload}`);
        yield put(showNotification('success','Changed Successfully'));
        yield put(checkTodo(<number>payload));
    } catch {
        yield put(showNotification('error','Error, todo not checked'));
    }
}

export default function* todosSaga() {
    yield takeEvery(LOAD_TODOS, loadTodosList);
    // @ts-ignore
    yield takeEvery(DELETE_SAGA_TODO, deleteTodoSaga);
    // @ts-ignore
    yield takeEvery(CHECK_SAGA_TODO, checkTodoSaga);
    // @ts-ignore
    yield takeEvery(ADD_SAGA_TODO, addTodoToList);
}