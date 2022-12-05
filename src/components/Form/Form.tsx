import React, {useEffect, useRef} from 'react';
import {StFormWrapper} from "./styled";
import {StButton, StInput} from "../commonStyles/commonStyles";
import {useDispatch} from "react-redux";
import {addCityToList} from "../../store/weather/thunks";

const Form = () => {
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputText, setInputText] = React.useState('');

    useEffect(()=>{
        inputRef.current?.focus();
    },[]);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement> ) => setInputText(e.target.value);

    const handleSubmit = ()  => {
        dispatch(addCityToList(inputText));
        setInputText('');
        inputRef.current?.focus();
    };

    return (
        <StFormWrapper>
            <StInput
                ref={inputRef}
                onChange={handleChangeInput}
                placeholder="Add your new city" value={inputText}/>
            <StButton
                fontSize="20px"
                disabled={!inputText.trim()}
                isDisabled={!inputText.trim()}
                onClick={handleSubmit}>
                        Add
            </StButton>
        </StFormWrapper>
    );
};

export default Form;
