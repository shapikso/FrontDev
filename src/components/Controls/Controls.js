import React from 'react';
import Button from "../commons/Button";

const Controls = ({stopTimer,startTimer,resetTime}) => (
        <div>
            <Button onClickHandler={startTimer} title='start'/>
            <Button onClickHandler={stopTimer} title='stop'/>
            <Button  onClickHandler={resetTime} title='reset'/>
        </div>
    );

export default Controls;