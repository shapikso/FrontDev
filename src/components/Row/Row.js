import React from 'react';
import Cell from '../Cell/Cell';
import Header from '../Header/Header';

const Row = ({user}) => {
    console.log(Object.values(user));
    return (
        <div className="table-row">
            <Header itemClass="table-row-one-item"
                    tableRowClass="table-row-one" />
            <div className="table-row-two">
                {
                    Object.values(user).map((objItem, key) =>
                        <Cell title={objItem}  itemClass="table-row-two-item" />
                    )
                }
            </div>
        </div>
    );
};

export default Row;