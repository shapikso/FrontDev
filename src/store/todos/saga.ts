import {call, takeEvery, put} from 'redux-saga/effects';
import {LOAD_CITIES, ADD_SAGA_CITY, UPDATE_SAGA_CITY} from './actionTypes';
import axios from "axios";
import {addCity, updateCity} from "./action";
import {URL} from "../../constants/api";
import {showNotification} from "../notify/action";
import * as actions from "./action";
import {returnWeatherObj} from "../../helpers/weather";

export function* loadCitiesList() {
    try {
        const cities = JSON.parse(localStorage.getItem('cities') || JSON.stringify({}));
        const { data } = yield call(axios, `${URL.groupUrl + cities.join(',')}`);
        yield put(addCity(returnWeatherObj(data.list)));
    } catch {
        yield put(showNotification('error','Error, cities not loaded'));
    }
}

export function* addCityToList({payload}: ReturnType<typeof actions.addCitySaga>) {
    try {
        const { data } = yield call(axios, `${URL.baseUrl}${payload}`);
        const cities = JSON.parse(localStorage.getItem('cities') || JSON.stringify([]));
        if (cities.indexOf(data.id) !== -1) throw Error;
        localStorage.setItem('cities', JSON.stringify([...cities, data.id]));
        yield put(showNotification('success','Added Successfully'));
        yield put(addCity(returnWeatherObj([data])));
    } catch {
        yield put(showNotification('error','Error, city not added'));
    }
}

export function* updateCityInList({payload}: ReturnType<typeof actions.addCitySaga>) {
    try {
        const { data } = yield call(axios, `${URL.baseUrl}${payload}`);
        yield put(showNotification('success','Updated Successfully'));
        yield put(updateCity(returnWeatherObj([data])[0]));
    } catch {
        yield put(showNotification('error','Error, city not Updated'));
    }
}

export function* todosSaga() {
    yield takeEvery(LOAD_CITIES, loadCitiesList);
    yield takeEvery(ADD_SAGA_CITY, addCityToList);
    yield takeEvery(UPDATE_SAGA_CITY, updateCityInList);
}