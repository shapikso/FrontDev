import React from 'react';
import ListItem from './ListItem';
import { StTasks } from "./styled";
import { useSelector } from "react-redux";
import { selectTodos } from "../../store/todos/selectors";

const List = () => {
    const todos = useSelector(selectTodos);
    return(
        <StTasks>{todos.map((el) => <ListItem {...el} key = {el.id}/>)}</StTasks>
    );
};

export default List;
