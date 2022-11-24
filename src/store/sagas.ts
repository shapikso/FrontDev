import {all, spawn} from 'redux-saga/effects';
import {ISSSaga} from './ISS/saga';

export default function* rootSaga() {
    const sagas = [ISSSaga];
    yield all(sagas.map(s => spawn(s)));
}