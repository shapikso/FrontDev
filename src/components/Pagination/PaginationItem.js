import React from 'react';

const PaginationItem = ({number, setActivePage, activePage}) => {
    const handleClick = () => setActivePage(number);
    return (
        <li onClick={handleClick}  className={activePage === number ? "pointer activepage" : "pointer"} >{number}</li>
    );
};

export default PaginationItem;