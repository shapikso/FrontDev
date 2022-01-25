import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List'
import Header from "./components/Header/Header";
import Controls from "./components/Controls/Controls";
import Timer from "./components/Timer/Timer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        timeLeft : 0,
        time: 0
    };
  }
    setNewTime = () => this.setState({timeLeft: this.state.timeLeft - 1});
    setTime = (time) => this.setState({time: time, timeLeft: time});
    resetTime = () => this.setState({time: 0, timeLeft: 0})
    startTimer = () => this.timerID = setInterval(() => this.setNewTime(), 1000);
    stopTimer = () => clearInterval(this.timerID);


    render() {
    return (
      <div className="wrapper">
        <Header title="timer React"/>
        <Form setTime={this.setTime} />
        <Timer time={this.state.timeLeft}/>
        <Controls startTimer={this.startTimer} stopTimer={this.stopTimer} resetTime={this.resetTime}/>
        {/*<List todos={this.state.todos} changeChecked = {this.changeChecked} delTodo={this.deleteTodo} />*/}
    </div>
    );
  }
}

export default App;
