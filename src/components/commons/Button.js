import React from 'react';

const Button = ({title, onClickHandler, disable}) => (
    <button disabled={disable} onClick={onClickHandler} className="btn"> {title} </button>
    );

export default Button;