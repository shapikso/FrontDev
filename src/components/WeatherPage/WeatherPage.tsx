import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCityInfoRequest} from "../../store/weather/thunks";
import {TWeatherRespond} from "../../store/weather/types";
import WeatherPageInfo from "./WeatherPageInfo";
import { useLocation } from 'react-router-dom';

type TProps ={
    weather: TWeatherRespond
}

const WeatherPage = ({weather}: TProps) => {
    const { pathname } = useLocation();
    const cardId = pathname.split('/')[1];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCityInfoRequest(cardId));
    },[]);

    return (
        <div>
            { weather.name
                ? <WeatherPageInfo {...weather} />
                : null
            }
        </div>
    );
};

export default WeatherPage;