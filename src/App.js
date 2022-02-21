import React from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';
import {StThemeWrapper, StWrapper,} from "./styles";
import Notification from './components/Notification/Notification';
import {selectTheme} from './store/theme/selectors';
import {useDispatch, useSelector} from "react-redux";
import {switchToDrak, switchToLight} from "./store/theme/action";
import {GlobalStyle} from "./GlobalStyles";
import {StButton} from "./components/commonStyles/commonStyles";

const App = () =>{
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    const onclickHandler = () => {
        if ( theme.primary === '#000') {
            dispatch(switchToLight());
        } else  {
            dispatch(switchToDrak());
        }
    };

    return (
        <>
            <GlobalStyle theme={theme}/>
            <Notification/>
            <StWrapper theme={theme} >
                <h1>Todo App</h1>
                <StThemeWrapper>
                    <StButton width="200px" fontSize="20px" theme={theme} onClick={onclickHandler}>Change Theme</StButton>
                </StThemeWrapper>
                <Form />
                <List/>
            </StWrapper>
        </>
    );
};

export default App;
