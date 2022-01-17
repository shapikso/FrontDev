import React from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';


class App extends React.Component {
  constructor() {
    super();
    this.state = {taskText: ['random Text']};
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  list(task) {
     this.setState({
        taskText: [...this.state.taskText,task]
     });
     
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Todo App</h1>
        <Form list = {this.list.bind(this)} />
        <div className="tasks">
          {
            console.log('state ', this.state.taskText)
          }
          { this.state.taskText.map((el, index) => {
            console.log(el);
            return <List taskText = {el} key = {index} />
          } )}
        </div>
    </div>
    );
  }
}

export default App;
