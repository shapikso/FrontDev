import React, {useState} from 'react';
import { StCountry, StList, StDegree, StImg, StRefresh } from "./styled";
import {TTheme} from "../../store/theme/types";
import {useSelector} from "react-redux";
import {TWeatherInfo} from "../../store/todos/types";

type TProps = {
    name : string,
    icon: string,
    id: number,
    temperature: number
    updateCity: (id: string) => void,
    // deleteTodoAction: (id: number) => void,
    theme: TTheme
    weather: TWeatherInfo[]
}

const ListItem = ({name, icon, id, temperature, theme, updateCity, weather }: TProps) => {
    const [cityParams, setCityParams] = useState({id,name,icon,temperature});
    const handleUpdateCity = () => {
        updateCity(name);
        const city = weather.find(((element) => element.id === id));
        // @ts-ignore
        setCityParams(city);
    };
    const getIcon = () => `http://openweathermap.org/img/wn/${cityParams.icon}@2x.png`;
    return(
        <StList>
            <StImg src={getIcon()}/>
            <StDegree>{cityParams.temperature.toFixed(0)}°</StDegree>
            <StCountry>{cityParams.name}</StCountry>
            <StRefresh onClick={handleUpdateCity}><i className="fas fa-refresh"/></StRefresh>
        </StList>
    );
};

export default ListItem;
