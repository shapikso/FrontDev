import React from 'react';
import {ButtonWrapper, StList} from "./styled";
import {StButton} from "../commonStyles/commonStyles";
import {checkTodo, deleteTodoAction} from "../../store/todos/action";
import {showNotification} from "../../store/notify/action";
import {useDispatch} from "react-redux";

const ListItem = ({title, checked, id, }) => {

    const dispatch = useDispatch();
    const changeChecked = (id) => {
        dispatch(checkTodo(id));
        dispatch(showNotification('success','Success'));
    };
    const deleteTodo = (id) =>{
        try {
            dispatch(deleteTodoAction(id));
            dispatch(showNotification('success','Success'));
        } catch (error) {
            dispatch(showNotification('error','Error'));
            return false;
        }
    };
    const deleteTask = () => deleteTodo(id);
    const changeTask = () => changeChecked(id);

    return(
        <StList done={checked}>
            <p>{title}</p>
            <ButtonWrapper>
                <StButton width="40px" onClick={ deleteTask }><i className="fas fa-trash"></i></StButton>
                <StButton width="40px" onClick={ changeTask }><i className="fas fa-check"></i></StButton>
            </ButtonWrapper>
        </StList>
    );};

export default ListItem;
