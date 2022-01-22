import React from 'react';
import ListItem from './ListItem';

const List = ({todos, deleteTodo, changeChecked}) => (
    <div className="tasks">
        {todos.map((el) => <ListItem
            {...el}
            deleteTodo={deleteTodo}
            key = {el.id}
            changeChecked = {changeChecked}
        />)}
    </div>
);

export default List;