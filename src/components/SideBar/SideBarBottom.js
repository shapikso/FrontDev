import React from 'react';

const SideBarBottom = ({setColor, color}) => {
    const setEraser = () => setColor({hex:'#fff'});
    const setPen = () => setColor({hex: color === '#fff' ? '#f44336' : color});
    return (
        <div className="side-bar-bottom">
            <input onChange={setPen} type="radio" id="option-1" checked={color === '#fff' ? false : true}/>
            <input onChange={setEraser} type="radio" id="option-2" checked={color === '#fff' ? true : false}/>
            <label htmlFor="option-1" className="option option-1">
                <span>Pen</span>
            </label>
            <label htmlFor="option-2" className="option option-2">
                <span>Eraser</span>
            </label>
        </div>
    );
};

export default SideBarBottom;