import axios from "axios";
import {addCity, deleteCity, getCityInfo, updateCity} from "./action";
import {URL} from "../../constants/api";
import {showNotification} from "../notify/action";
import {returnWeatherObj} from "../../helpers/weather";
import {Dispatch} from "redux";

export function loadCitiesList() {
    return async (dispatch: Dispatch) => {
        try {
            const cities = JSON.parse(localStorage.getItem('cities') || JSON.stringify({}));
            const { data } = await axios(`${URL.groupUrl + cities.join(',')}`);
            dispatch(addCity(returnWeatherObj(data.list)));
        } catch {
            dispatch(showNotification('error','Error, cities not loaded'));
        }
    };
}

export function addCityToList(city : string) {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await axios(`${URL.baseUrl}${city}`);
            const cities = JSON.parse(localStorage.getItem('cities') || JSON.stringify([]));
            if (cities.indexOf(data.id) !== -1) throw Error;
            localStorage.setItem('cities', JSON.stringify([...cities, data.id]));
            dispatch(showNotification('success','Added Successfully'));
            dispatch(addCity(returnWeatherObj([data])));
        } catch {
            dispatch(showNotification('error','Error, city not added'));
        }
    };
}

export function updateCityInList(city: string) {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await axios(`${URL.baseUrl}${city}`);
            dispatch(showNotification('success','Updated Successfully'));
            dispatch(updateCity(returnWeatherObj([data])[0]));
        } catch {
            dispatch(showNotification('error', 'Error, city not Updated'));

        }
    };
}

export function deleteCityInfoRequest(cityID : number) {
    return async (dispatch: Dispatch) => {
        const cities = JSON.parse(localStorage.getItem('cities') || JSON.stringify([]));
        localStorage.setItem('cities', JSON.stringify(cities.filter((el :number) => el !== cityID)));
        dispatch(showNotification('success','Deleted Successfully'));
        dispatch(deleteCity(cityID));
    };
}

export function getCityInfoRequest(cityID : string) {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await axios(`${URL.groupUrl}${cityID}`);
            dispatch(getCityInfo(data.list[0]));
        } catch {
            dispatch(showNotification('error','Error, city info not loaded'));
        }
    };
}
