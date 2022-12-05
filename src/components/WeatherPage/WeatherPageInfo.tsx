import React from 'react';
import {DegreeWrapper, StImg, StInfo, StP} from "./styled";
import {TWeather} from "../../store/weather/types";

type TProps ={
    name: string,
    sys: {
        country: string
    },
    wind: {
        speed: number,
    },
    main : {
        feels_like: number,
        pressure: number,
        humidity: number,
        temp: number
    }
    clouds: {
        all: number
    },
    visibility: number,
    weather: TWeather[]
}

const WeatherPageInfo = ({name, sys: {country}, wind: {speed}, main: {humidity, pressure, feels_like, temp}, clouds: {all}, visibility, weather }: TProps) => {
    const getIcon = () => `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    return (
        <div>
            <div>
                <h1>{name}, {country}</h1>
                <DegreeWrapper>{temp.toFixed(0)}° <StImg src={getIcon()}/></DegreeWrapper>
            </div>
            <StInfo>
                <StP>Feels like <span>{Math.round(feels_like)}°C</span></StP>
                <StP>Wind<span>S {Math.round(speed)} km/h</span></StP>
                <StP>Humidity<span>{humidity}%</span></StP>
                <StP>Pressure<span>{pressure} hPa</span></StP>
                <StP>Cloud Cover<span>{all}%</span></StP>
                <StP>Visibility<span>{visibility/1000} km</span></StP>
                <StP>Type of weather<span>{weather[0].description}</span></StP>
            </StInfo>
        </div>
    );
};

export default WeatherPageInfo;