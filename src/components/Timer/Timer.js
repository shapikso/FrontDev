import React from 'react';
import './timer.css';

const Timer = ({time}) => (
        <div className="timer-wrapper">
           <span className="timer"> {Math.floor(time/60)}:{Math.floor(time%60)} </span>
        </div>
    );


export default Timer;