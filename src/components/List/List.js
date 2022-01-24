import React from 'react';
import ListItem from './ListItem';

const List = ({galery, showBigImg}) => (
    <div className="galery">
        {galery.map((el) => <ListItem
            image = {el.thumbnailUrl}
            bigImage ={el.url}
            key = {el.id}
            showBigImg={showBigImg}
        />)}
    </div>
);

export default List;