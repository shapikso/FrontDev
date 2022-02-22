import React from 'react';
import {ButtonWrapper, StList} from "./styled";
import {StButton} from "../commonStyles/commonStyles";

const ListItem = ({title, checked, id, checkTodo, deleteTodoAction, showNotification, theme }) => {
    const changeChecked = () => {
        checkTodo(id);
        showNotification('success','Changed Successfully');
    };
    const deleteTodo = () =>{
        deleteTodoAction(id);
        showNotification('success','Delete Successfully');
    };

    return(
        <StList done={checked}>
            <p>{title}</p>
            <ButtonWrapper>
                <StButton theme={theme} width="40px" onClick={ deleteTodo }><i className="fas fa-trash"/></StButton>
                <StButton theme={theme} width="40px" onClick={ changeChecked }><i className="fas fa-check"/></StButton>
            </ButtonWrapper>
        </StList>
    );};

export default ListItem;
