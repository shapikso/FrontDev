import React from 'react';
import ListItem from './indexListItem';
import { StTasks } from "./styled";
import {TTodos, TWeatherInfo} from "../../store/todos/types";

type TProps ={
    weather: TWeatherInfo[]
}

const List = ({weather}:TProps) => (
    <StTasks>{weather.map((el) => <ListItem {...el} key = {el.id}/>)}</StTasks>
);

export default List;
