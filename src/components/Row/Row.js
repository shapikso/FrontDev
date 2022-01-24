import React from 'react';
import Cell from '../Cell/Cell';
import Header from '../Header/Header';

const Row = ({user}) => (
        <div className="table-row">
            <Header itemClass="table-row-one-item"
                    tableRowClass="table-row-one" />
            <div className="table-row-two">
                {
                    Object.values(user).map((objItem, index) =>
                        <Cell title={objItem} key={index}  itemClass="table-row-two-item" />
                    )
                }
            </div>
        </div>
    );

export default Row;