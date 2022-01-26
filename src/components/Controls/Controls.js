import React from 'react';
import Button from "../commons/Button";
import './controls.css';

const Controls = ({stopTimer,startTimer,resetTime,disabled, disableReset}) => {
    return (
        <div className="controls">
            <Button disabled={disableReset ?? disabled} onClickHandler={startTimer} title='start'/>
            <Button disabled={disableReset ?? !disabled} onClickHandler={stopTimer} title='stop'/>
            <Button disabled={!!disableReset} onClickHandler={resetTime} title='reset'/>
        </div>
    );
};

export default Controls;