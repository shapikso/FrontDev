import React, {useEffect} from 'react';
import { Routes, Route} from "react-router-dom";
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