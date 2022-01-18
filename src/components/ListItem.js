import React from 'react';

const ListItem = ({taskText, checked, changeChecked, id, delTodo}) => (
    <div className={checked ? 'list done' : 'list'}>
        <p>{taskText}</p>
        <div className="divBtn">
            <button onClick={() => delTodo(id)}><i className="fas fa-trash"></i></button>
            <button onClick={() => changeChecked(id)}><i className="fas fa-check"></i></button>
        </div>
    </div>
);

export default ListItem;