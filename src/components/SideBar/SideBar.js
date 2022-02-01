import React from 'react';
import './sidebar.scss';
import SideBarHeader from './SideBarHeader';
import SideBarBottom from './SideBarBottom';

const SideBar = ({changeRangeHandler, color, setColor}) => {
    return (
        <div className="side-bar">
            <SideBarHeader changeRangeHandler={changeRangeHandler} color={color} setColor={setColor}/>
            <SideBarBottom setColor={setColor} color={color}/>
        </div>
    );
};

export default SideBar;