import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';
import axios from "axios";
import Loader from "./components/Loader/Loader";
import {URL} from "./constants/api";
import Nodata from "./components/Nodata/Nodata";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isLoading: true
        };
    }
    
    componentDidMount() {
        this.getToDoData();
    }

  getToDoData = async() => {
      try {
          const {data} = await axios.get(URL);
          this.setState({
              todos: data,
              isLoading: false
          });
      } catch (e) {
          console.log('log error', e);
          this.setState({isLoading: false});
      }
  }

  addToList = (task) => this.setState({ todos: [
      ...this.state.todos,
      {title: task, id: Date.now(), completed: false}
  ]});

  changeChecked = (id) => {
      this.setState({
          todos: this.state.todos.map(el => el.id === id ? {...el, completed: !el.completed} : el)
      });
  }

  deleteTodo = (id) => this.setState({ todos: this.state.todos.filter(el => el.id !== id)});
  
  render() {
      return (
          <div className="wrapper">
              <h1>Todo App</h1>
              <Form addToList={this.addToList} />
              { this.state.isLoading
                  ? <Loader/> 
                  : this.state.todos.length
                      ?  <List todos={this.state.todos}
                          changeChecked = {this.changeChecked}
                          deleteTodo={this.deleteTodo} />
                      :  <Nodata/>
              }
          </div>
      );
  }
}

export default App;
