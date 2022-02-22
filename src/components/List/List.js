import React from 'react';
import ListItem from './indexListItem';
import { StTasks } from "./styled";


const List = ({todos}) => (
    <StTasks>{todos.map((el) => <ListItem {...el} key = {el.id}/>)}</StTasks>
);

export default List;
