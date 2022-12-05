import { ApplicationState } from "../types";
export const selectWeatherInCities = (state: ApplicationState) => state.weather.weather;
export const selectWeatherInSingleCity = (state: ApplicationState) => state.weather.singleWeather;

