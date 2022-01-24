import React from 'react';

const ListItem = ({image, showBigImg, bigImage}) => {
    const clickHandler = () => showBigImg(bigImage);
    return(
        <div onClick={clickHandler} className="picture">
            <img src={image}/>
        </div>
    );};

export default ListItem;