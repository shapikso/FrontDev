import React from 'react';
import Notification from "../Notification";
import {StWrapper} from "../../styles";
import WeatherPage from "../WeatherPage";

const SingleWeather = () => (
    <>
        <Notification/>
        <StWrapper>
            <WeatherPage/>
        </StWrapper>
    </>
);

export default SingleWeather;