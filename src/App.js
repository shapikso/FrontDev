import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';
import axios from "axios";
import Loader from "./components/Loader/Loader";
import NoData from "./components/Nodata/Nodata";
import {URL} from "./constants/api";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isLoading: true};
    }

    componentDidMount() {
        this.getToDoData();
    }

  getToDoData = async() => {
      try {
          const {data} = await axios.get(URL.baseUrl + URL.getUrl);
          this.setState({
              todos: data,
              isLoading:false});
      } catch (error) {
          this.setState({ isLoading: false });
      }
  }

  addTolist = async (task) =>{
      const toDo = {title: task, id: Date.now(), completed: false};
      try {
          await axios.post(URL.baseUrl, toDo);
          this.setState({ todos: [...this.state.todos,toDo]});
      } catch (error) {
          return false;
      }
  }

  changeChecked = async (id, status) => {
      try {
          await axios.put(URL.baseUrl+`/${id}`, {
              completed: !status
          });
      } finally {
          this.setState({
              todos: this.state.todos.map(el => el.id === id ? {...el, completed: !el.completed} : el)
          });
      }
  }


  deleteTodo = async (id) =>{
      try {
          await axios.delete(URL.baseUrl+`/${id}`);
          this.setState({ todos: this.state.todos.filter(el => el.id !== id)});
      } catch (error) {
          return false;
      }
  };

  render() {
      return (
          <div className="wrapper">
              <h1>Todo App</h1>
              <Form addTolist={this.addTolist} />
              {
                  this.state.isLoading
                      ? <Loader/>
                      : this.state.todos.length
                          ?  <List todos={this.state.todos}
                              changeChecked = {this.changeChecked}
                              deleteTodo={this.deleteTodo} />
                          :  <NoData/>
              }
          </div>
      );
  }
}

export default App;
