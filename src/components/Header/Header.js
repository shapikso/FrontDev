import React from 'react';
import {header} from '../../constants/headers';
import Cell from '../Cell/Cell'

const Header = ({tableRowClass, itemClass }) => (
        <div className={tableRowClass}>
            { header.map((el, index) =>  <Cell title={el} key={index} itemClass={itemClass} /> ) }
        </div>
);

export default Header;