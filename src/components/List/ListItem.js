import React from 'react';

const ListItem = ({value, checked, changeChecked, id, deleteTodo}) => {
    const deleteTask = () => deleteTodo(id);
    const changeTask = () => changeChecked(id);

    return(
    <div className={checked ? 'list done' : 'list'}>
        <p>{value}</p>
        <div className="divBtn">
            <button onClick={ deleteTask }><i className="fas fa-trash"></i></button>
            <button onClick={ changeTask }><i className="fas fa-check"></i></button>
        </div>
    </div>
);}

export default ListItem;