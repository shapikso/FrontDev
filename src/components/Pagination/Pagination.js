import React from 'react';

const Pagination = ({activePage, setActivePage}) => {
    const onclicHandler = (e) => setActivePage(+e.target.innerHTML);
    return (
        <ul className="pages">
            <li onClick={onclicHandler} className={activePage === 1 ? "pointer activepage" : "pointer"} >1</li>
            <li onClick={onclicHandler} className={activePage === 2 ? "pointer activepage" : "pointer"} >2</li>
            <li onClick={onclicHandler} className={activePage === 3 ? "pointer activepage" : "pointer"} >3</li>
            <li onClick={onclicHandler} className={activePage === 4 ? "pointer activepage" : "pointer"} >4</li>
            <li onClick={onclicHandler} className={activePage === 5 ? "pointer activepage" : "pointer"} >5</li>
        </ul>
    );
};

export default Pagination;