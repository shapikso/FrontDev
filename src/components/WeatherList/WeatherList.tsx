import React, {useEffect} from 'react';
import { StWrapper } from '../../styles';
import Form from "../Form";
import List from "../List/indexList";
import Notification from '../Notification';
import {useDispatch} from "react-redux";
import {loadCitiesList} from "../../store/weather/thunks";

const WeatherList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCitiesList());
    },[]);
    return (
        <>
            <Notification/>
            <StWrapper>
                <Form />
                <List/>
            </StWrapper>
        </>
        
    );
};

export default WeatherList;