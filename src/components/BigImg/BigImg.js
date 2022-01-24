import React from 'react';

const BigImg = ({bigImg, hiddeBigImg}) => {
    const hiddeImg = () => hiddeBigImg();
    return (
        <div className= "zoomIn">
            <img src={bigImg} className="bigImg"/>
            <span onClick={hiddeImg} className="delete-btn pointer">✘</span>
        </div>
    );
};

export default BigImg;