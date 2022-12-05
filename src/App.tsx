import React, {useEffect} from 'react';
import { Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loadCitiesList} from "./store/weather/thunks";
import WeatherList from "./components/WeatherList/WeatherList";
import SingleWeather from "./components/SingleWeather/SingleWeather";

const App = () =>
    (
        <>
            <Routes>
                <Route path="/" element={<WeatherList/>} />
                <Route path="/:id" element={<SingleWeather/>} />
            </Routes>
        </>
    );

export default App;