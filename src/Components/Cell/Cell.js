import React from 'react';

const Cell = ({item}) => (
    <div className="cell" >
        <div className={item === 1 ? 'yellow' : item === 2 ? 'red' : 'white' }></div>
    </div>
);

export default Cell;