import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List'

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
      this.setState({
          todos: this.state.todos.map(el => el.id === id ? {...el, checked: !el.checked} : el)
      });
  }

  deleteTodo = (id) => this.setState({ todos: this.state.todos.filter(el => el.id !== id)});

  render() {
    return (
      <div className="wrapper">
        <h1>Todo App</h1>
        <Form addTolist={this.addTolist} />
        <List todos={this.state.todos} changeChecked = {this.changeChecked} delTodo={this.deleteTodo} />
    </div>
    );
  }
}

export default App;
