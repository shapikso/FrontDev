import React, {useState, useEffect, useContext} from 'react';
import Form from './components/Form/Form';
import List from './components/List/List'
import { StWrapper, StNotificator } from "./styles";
import {URL} from './constants/api';
import axios from 'axios';
import {NotificationContext} from './NotificationContext';

const App = () => {

  const [todos, setTodos] = useState([{title: 'random Text', id: 1, checked: false}]);
  const {notification, showNotification } = useContext(NotificationContext);
    useEffect(() => {
        getToDoData();
    },[]);

    const getToDoData = async() => {
        try {
            const {data} = await axios.get(URL.baseUrl + URL.getUrl);
            setTodos(data);
        } catch (error) {
            this.setState({ isLoading: false });
        }
    }

    const addToList = async (task) =>{
        const toDo = {title: task, id: Date.now(), completed: false};
        try {
            await axios.post(URL.baseUrl, toDo);
            setTodos( [...todos, {title: task, id: Date.now(), checked: false}]);
            showNotification('success','Success');
        } catch (error) {
            showNotification('error','Error');
            return false;
        }
    }

    const changeChecked = async (id, status) => {
        try {
            await axios.put(URL.baseUrl+`/${id}`, {
                completed: !status
            });
            showNotification('success','Success');
        } finally {
            setTodos( todos.map(el => el.id === id ? {...el, checked: !el.checked} : el));
        }
    }


   const deleteTodo = async (id) =>{
        try {
            await axios.delete(URL.baseUrl+`/${id}`);
            setTodos( todos.filter(el => el.id !== id));
            showNotification('success','Success');
        } catch (error) {
            showNotification('error','Error');
            return false;
        }
    };
    return (
        <>
            {
                notification.type
                    ? (<StNotificator type={notification.type}>
                        <p> {notification.message} </p>
                    </StNotificator>)
                    : false
            }
          <StWrapper>
            <h1>Todo App</h1>
            <Form addToList={addToList} />
            <List todos={todos} changeChecked = {changeChecked} deleteTodo={deleteTodo} />
          </StWrapper>
        </>
    );
}

export default App;
