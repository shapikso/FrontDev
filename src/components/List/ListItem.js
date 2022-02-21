import React from 'react';
import {ButtonWrapper, StList} from "./styled";
import {StButton} from "../commonStyles/commonStyles";
import {checkTodo, deleteTodoAction} from "../../store/todos/action";
import {showNotification} from "../../store/notify/action";
import {useDispatch} from "react-redux";

const ListItem = ({title, checked, id, }) => {
    const dispatch = useDispatch();
    const changeChecked = () => {
        dispatch(checkTodo(id));
        dispatch(showNotification('success','Changed Successfully'));
    };
    const deleteTodo = () =>{
        dispatch(deleteTodoAction(id));
        dispatch(showNotification('success','Delete Successfully'));
    };

    return(
        <StList done={checked}>
            <p>{title}</p>
            <ButtonWrapper>
                <StButton width="40px" onClick={ deleteTodo }><i className="fas fa-trash"/></StButton>
                <StButton width="40px" onClick={ changeChecked }><i className="fas fa-check"/></StButton>
            </ButtonWrapper>
        </StList>
    );};

export default ListItem;
