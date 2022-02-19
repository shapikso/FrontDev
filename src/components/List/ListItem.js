import React from 'react';
import {ButtonWrapper, StList} from "./styled";
import {StButton} from "../commonStyles/commonStyles";

const ListItem = ({title, checked, changeChecked, id, deleteTodo}) => {
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