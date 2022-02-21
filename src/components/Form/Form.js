import React, {useEffect, useRef, useState} from 'react';
import {StFormWrapper} from "./styled";
import {StButton, StInput} from "../commonStyles/commonStyles";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/todos/action";
import {showNotification} from "../../store/notify/action";

const Form = () => {
    const inputRef = useRef();
    const [inputText, setInputText] = useState('');

    useEffect(()=>{
        inputRef.current.focus();
    },[]);

    const dispatch = useDispatch();
    const addToList = (task) => {
        const toDo = {title: task, id: Date.now(), completed: false};
        dispatch(addTodo(toDo));
        dispatch(showNotification('success','Added Successfully'));
    };

    const handleChangeInput = (e) => setInputText(e.target.value);

    const handleSubmit = ()  => {
        addToList(inputText);
        setInputText('');
        inputRef.current.focus();
    };

    return (
        <StFormWrapper>
            <StInput
                ref={inputRef}
                onChange={handleChangeInput}
                placeholder="Add your new todo" value={inputText}/>
            <StButton fontSize="20px"
                disabled={!inputText.trim()}
                isDisabled={!inputText.trim()}
                onClick={handleSubmit}>
                        Add
            </StButton>
        </StFormWrapper>
    );
};

export default Form;
