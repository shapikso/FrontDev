import React from 'react';
import ListItem from './ListItem'

const List = ({todos, deleteTodo, changeChecked, delTodo}) => (
    <div className="tasks">
        {todos.map((el, index) => <ListItem
            {...el}
            deleteTodo={delTodo}
            key = {el.id}
            changeChecked = {changeChecked}
        />)}
    </div>
)

export default List;