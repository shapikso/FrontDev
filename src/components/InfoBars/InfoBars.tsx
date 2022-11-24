import React from 'react';
import {StInfoBar, StInfoBars } from './styled';

type TProps ={
    date: Date;
    position : {
        latitude: string,
        longitude: string
    }
}

const InfoBars = ({ position, date}:TProps) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const getData = () => date.toLocaleDateString("en-US", options);
    const getUCTHours = () => date.getUTCHours();
    const getUCTMinutes = () => date.getUTCMinutes();
    return(
        <StInfoBars>
            <StInfoBar width="69%">
                <span>ISS is now located at:</span>
                <span>longitude: { position.longitude }, latitude: { position.latitude }</span>
            </StInfoBar>
            <StInfoBar width="30%">
                <span>Current UTC time : {getUCTHours()}:{getUCTMinutes()}</span>
                <span>{getData()}</span>
            </StInfoBar>
        </StInfoBars>
    );};

export default InfoBars;
