import React from 'react';
import ListItem from './ListItem'
import {StTasks} from "./styled";

const List = ({todos, deleteTodo, changeChecked}) => (
    <StTasks>
        {todos.map((el) => <ListItem
            {...el}
            deleteTodo={deleteTodo}
            key = {el.id}
            changeChecked = {changeChecked}
        />)}
    </StTasks>
)

export default List;