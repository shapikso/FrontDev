import React, {useEffect, useRef, useState, useContext} from 'react';
import {StFormWrapper} from "./styled";
import {StButton, StInput} from "../commonStyles/commonStyles";
import {UserContext} from "../../themeContext";

const Form = () => {

  const inputRef = useRef();
  const [inputText, setInputText] = useState('');
  const name = useContext(UserContext);
  useEffect(()=>{
    inputRef.current.focus();
  },[])

  const handleChangeInput = (e) => setInputText(e.target.value);

  const handleSubmit = ()  => {
      name.changeName(inputText);
      setInputText('');
      inputRef.current.focus();
  }

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
}

export default Form;