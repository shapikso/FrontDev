import React from 'react';
import Cell from '../Cell/Cell';

const Row = ({row, rowId, setPoint, playerToken}) => {

    const clickHandler = () => setPoint(rowId, playerToken) ;
    return (
        <div onClick={clickHandler} className="row">
            {row.map((el,index) => <Cell item={el} key={index} />)}
        </div>
    );
};

export default Row;