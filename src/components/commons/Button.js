import React from 'react';

const Button = ({title, onClickHandler, disabled}) => (
    <button disabled={disabled} onClick={onClickHandler} className="btn"> {title} </button>
    );

export default Button;