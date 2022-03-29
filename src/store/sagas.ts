import {all, spawn} from 'redux-saga/effects';
import {todosSaga} from './todos/saga';

export default function* rootSaga() {
    const sagas = [todosSaga];
    yield all(sagas.map(s => spawn(s)));
}