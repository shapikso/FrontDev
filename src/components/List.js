import React from 'react';
import ListItem from './ListItem'

const List = ({todos, deleteTodo, changeChecked, delTodo}) => (
    <div className="tasks">
        {todos.map((el, index) => <ListItem taskText={el.value} delTodo={delTodo} key = {el.id} id={el.id} checked = {el.checked} changeChecked = {changeChecked} />)}
        </div>
)

export default List;