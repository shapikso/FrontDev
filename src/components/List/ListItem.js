import React from 'react';

const ListItem = ({title, completed, changeChecked, id, deleteTodo}) => {
    const deleteTask = () => deleteTodo(id);
    const changeTask = () => changeChecked(id, completed);

    return(
        <div className={completed ? 'list done' : 'list'}>
            <p>{title}</p>
            <div className="divBtn">
                <button onClick={ deleteTask }><i className="fas fa-trash"></i></button>
                <button onClick={ changeTask }><i className="fas fa-check"></i></button>
            </div>
        </div>
    );};

export default ListItem;