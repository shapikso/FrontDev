import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { CirclePicker } from 'react-color';

const SideBarHeader = ({changeRangeHandler,color,setColor}) => (
    <div className="side-bar-top">
        <Slider
            min={1}
            max={15}
            step={1}
            defaultValue={8}
            onChange={changeRangeHandler}/>
        <CirclePicker
            color={ color }
            onChange={ setColor }
        />
    </div>
);

export default SideBarHeader;