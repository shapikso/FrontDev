import {TWeatherInfo, TWeatherRespond} from "../store/todos/types";

export const returnWeatherObj = (weather: TWeatherRespond[]) : TWeatherInfo[]=> {
    return weather.reduce((acc: TWeatherInfo[], element) => [...acc, {
        id: element.id,
        name: element.name,
        temperature: element.main.temp,
        icon: element.weather[0].icon
    }],[]);
};
