import {all, spawn} from 'redux-saga/effects';
import todosSagas from './todos/saga/index';

export default function* rootSaga() {
    const sagas = [todosSagas];
    yield all(sagas.map(s => spawn(s)));
}