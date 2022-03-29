import React from 'react';
import {ButtonWrapper, StList} from "./styled";
import {StButton} from "../commonStyles/commonStyles";
import {TTheme} from "../../store/theme/types";

type TProps = {
    title : string,
    completed: boolean,
    id: number,
    checkTodo: (id: number) => void,
    deleteTodoAction: (id: number) => void,
    theme: TTheme
}

const ListItem = ({title, completed, id, checkTodo, deleteTodoAction, theme }: TProps) => {
    const changeChecked = () => {
        checkTodo(id);
    };
    const deleteTodo = () =>{
        deleteTodoAction(id);
    };

    return(
        <StList done={completed}>
            <p>{title}</p>
            <ButtonWrapper>
                <StButton theme={theme} width="40px" onClick={ deleteTodo }><i className="fas fa-trash"/></StButton>
                <StButton theme={theme} width="40px" onClick={ changeChecked }><i className="fas fa-check"/></StButton>
            </ButtonWrapper>
        </StList>
    );};

export default ListItem;
