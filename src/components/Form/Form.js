import React, {useEffect, useRef} from 'react';
import {StFormWrapper} from "./styled";
import {StButton, StInput} from "../commonStyles/commonStyles";

const Form = ({theme, showNotification, addTodo}) => {
    const inputRef = useRef();
    const [inputText, setInputText] = React.useState('');

    useEffect(()=>{
        inputRef.current.focus();
    },[]);

    const addToList = (task) => {
        const toDo = {title: task, id: Date.now(), completed: false};
        addTodo(toDo);
        showNotification('success','Added Successfully');
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
            <StButton
                fontSize="20px"
                theme={theme}
                disabled={!inputText.trim()}
                isDisabled={!inputText.trim()}
                onClick={handleSubmit}>
                        Add
            </StButton>
        </StFormWrapper>
    );
};

export default Form;
