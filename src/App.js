import React from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';
import { StWrapper,  } from "./styles";
import Notification from "./components/Notification/Notification";

const App = () =>(
    <>
        <Notification/>
        <StWrapper>
            <h1>Todo App</h1>
            <Form />
            <List/>
        </StWrapper>
    </>
);

export default App;
