import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List'
import axios from "axios";
import Loader from "./components/Loader/Loader";
import {URL} from "./constants/constans";

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {todos: []};
  }

  setToDoes = (data) => {
      this.setState({
          todos: data
      });
  }

  getToDoData = async() => {
      try {
          const res = await axios.get(URL);
          const data = res.data;
          this.setToDoes(data);
      } catch (error) {
          console.log(error);
      }
  }

  addTolist = (task) => this.setState({ todos: [
      ...this.state.todos,
          {title: task, id: Date.now(), completed: false}
      ]});

  changeChecked = (id) => {
      this.setState({
          todos: this.state.todos.map(el => el.id === id ? {...el, completed: !el.completed} : el)
      });
  }

  deleteTodo = (id) => this.setState({ todos: this.state.todos.filter(el => el.id !== id)});

  componentDidMount() {
      this.getToDoData();
  }
  render() {
    return (
    <div className="wrapper">
        <h1>Todo App</h1>
        <Form addTolist={this.addTolist} />
        {!!this.state.todos.length
            ?  <List todos={this.state.todos} changeChecked = {this.changeChecked} delTodo={this.deleteTodo} />
            :  <Loader/>
        }
    </div>
    );
  }
}

export default App;
