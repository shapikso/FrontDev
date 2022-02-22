import React from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';
import {StWrapper} from "./styles";
import Notification from './components/Notification/Notification';
import {selectTheme} from './store/theme/selectors';
import {useSelector} from "react-redux";
import {GlobalStyle} from "./GlobalStyles";
import Theme from "./components/Theme/Theme";

const App = () =>{
    const theme = useSelector(selectTheme);
    return (
        <>
            <GlobalStyle theme={theme}/>
            <Notification/>
            <Theme/>
            <StWrapper theme={theme} >
                <h1>Todo App</h1>
                <Form />
                <List/>
            </StWrapper>
        </>
    );
};

export default App;
