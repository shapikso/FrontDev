import React, {useEffect, useRef} from 'react';
import {StFormWrapper} from "./styled";
import {StButton, StInput} from "../commonStyles/commonStyles";
import {TTheme} from "../../store/theme/types";
import {TTodos} from "../../store/todos/types";

type TProps = {
    theme: TTheme,
    addTodo: (todo: TTodos) => void
}

const Form = ({theme, addTodo}: TProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputText, setInputText] = React.useState('');

    useEffect(()=>{
        inputRef.current?.focus();
    },[]);

    const addToList = (task: string) => {
        const toDo = {title: task, id: Date.now(), completed: false};
        addTodo(toDo);
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement> ) => setInputText(e.target.value);

    const handleSubmit = ()  => {
        addToList(inputText);
        setInputText('');
        inputRef.current?.focus();
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
