import React from 'react';

const Cell = ({title, itemClass}) =>  (
        <div className={itemClass}>
            {title}
        </div>
    );

export default Cell;