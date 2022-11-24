import {call, takeEvery, put} from 'redux-saga/effects';
import {LOAD_PEOPLE, LOAD_POSITION} from "./actionTypes";
import axios from "axios";
import {URL} from "../../constants/api";
import {addPeople, addPosition} from "./action";
import {returnISSPeople} from "../../helpers/sort";

export function* loadPosition() {
    try {
        const {data} = yield call(axios.get, `${URL.locationURL}`);
        yield put(addPosition(data.iss_position));
    } catch(error) {
        console.log(error);
    }
}

export function* loadPeople() {
    try {
        const {data} = yield call(axios.get, `${URL.peopleInSpaceURL}`);
        yield put(addPeople(returnISSPeople(data.people)));
    } catch(error) {
        console.log(error);
    }
}

export function* ISSSaga() {
    yield takeEvery(LOAD_POSITION, loadPosition);
    yield takeEvery(LOAD_PEOPLE, loadPeople);
}