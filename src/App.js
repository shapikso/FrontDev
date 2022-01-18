import React from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: [{value: 'random Text', id: 1, checked: false}]};
  }

  addTolist = (task) => this.setState({ todos: [
      ...this.state.todos,
          {value: task, id: Date.now(), checked: false}
      ]});

  changeChecked = (id) => {
      this.setState({ todos: this.state.todos.map(el => {
              if (el.id === id) {
                  return {...el, checked: !el.checked}
              } else {
                  return {...el}
              }
          }
      )});
  }

  delTodo = (id) => {
        this.setState({ todos: this.state.todos.filter(el => el.id !== id)});
    }

  render() {
    return (
      <div className="wrapper">
        <h1>Todo App</h1>
        <Form addTolist={this.addTolist} />
        <List todos={this.state.todos} changeChecked = {this.changeChecked} delTodo={this.delTodo} />
    </div>
    );
  }
}

export default App;
