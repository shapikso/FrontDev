import React, {useState} from 'react';
import Form from './components/Form/Form';
import List from './components/List/List'
import {StWrapper} from "./styles";

const App = () => {

  const [todos, setTodos] = useState([{value: 'random Text', id: 1, checked: false}])

  const addToList = (task) => setTodos( [...todos, {value: task, id: Date.now(), checked: false}]);

  const changeChecked = (id) => setTodos( todos.map(el => el.id === id ? {...el, checked: !el.checked} : el));


    const deleteTodo = (id) => setTodos( todos.filter(el => el.id !== id));

    return (
      <StWrapper>
        <h1>Todo App</h1>
        <Form addToList={addToList} />
        <List todos={todos} changeChecked = {changeChecked} deleteTodo={deleteTodo} />
    </StWrapper>
    );
}

export default App;
