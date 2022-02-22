import React from 'react';
import ListItem from './indexListItem';
import { StTasks } from "./styled";
import {TTodos} from "../../store/todos/types";

type TProps ={
    todos: TTodos[]
}

const List = ({todos}:TProps) => (
    <StTasks>{todos.map((el) => <ListItem {...el} key = {el.id}/>)}</StTasks>
);

export default List;
