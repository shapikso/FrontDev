import React from 'react';

const Timer = ({time}) => (
        <div>
            {Math.floor(time/60)}:{Math.floor(time%60)}
        </div>
    );


export default Timer;