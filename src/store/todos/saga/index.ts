import {call, takeEvery, put} from 'redux-saga/effects';
import {CHECK_SAGA_TODO, DELETE_SAGA_TODO, LOAD_TODOS, ADD_SAGA_TODO} from '../actionTypes';
import axios from "axios";
import {addTodo, checkTodo, deleteTodoAction,} from "../action";
import {URL} from "../../../constants/api";
import {TTodos} from "../types";

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
        const {data} = yield call(axios.post, `${URL.baseUrl}${URL.getUrl}`, payload);
        console.log(data);
        yield put(addTodo([<TTodos>payload]));
    } catch {
        console.log('error');
    }
}

function* deleteTodoSaga({payload}: TAction) {
    try {
        yield call(axios.delete, `${URL.baseUrl}/${payload}`);
        yield put(deleteTodoAction(<number>payload));
    } catch {
        console.log('error');
    }
}

function* checkTodoSaga({payload}: TAction) {
    try {
        yield call(axios.put, `${URL.baseUrl}/${payload}`);
        yield put(checkTodo(<number>payload));
    } catch {
        console.log('error');
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