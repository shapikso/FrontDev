import React, {useContext} from 'react';
import Form from './components/Form/Form';
// import List from './components/List/List'
import {StH1, StWrapper} from "./styles";
import {UserContext} from "./themeContext";

const App = () => {

    const name = useContext(UserContext);
  // const [todos, setTodos] = useState([{value: 'random Text', id: 1, checked: false}])
  //
  // const addToList = (task) => setTodos( [...todos, {value: task, id: Date.now(), checked: false}]);
  // const changeChecked = (id) => setTodos( todos.map(el => el.id === id ? {...el, checked: !el.checked} : el));
  //
  //
  //   const deleteTodo = (id) => setTodos( todos.filter(el => el.id !== id));

    return (
      <StWrapper>
        <StH1>{name.name}</StH1>
        <Form
            // addToList={addToList}
        />
        {/*<List todos={todos} changeChecked = {changeChecked} deleteTodo={deleteTodo} />*/}
    </StWrapper>
    );
}

export default App;
