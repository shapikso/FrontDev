import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from "./components/Header/Header";
import Controls from "./components/Controls/Controls";
import Timer from "./components/Timer/Timer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        timeLeft : 0,
        isTicking: false
    };
  }
    setNewTime = () => {
      this.state.timeLeft
      ? this.setState({timeLeft: this.state.timeLeft - 1, isTicking: true})
      : this.stopTimer();
  }
    setTime = (time) => this.setState({timeLeft: time});
    resetTime = () => this.setState({timeLeft: 0})
    startTimer = () => this.timerID = setInterval(() => this.setNewTime(), 1000);
    stopTimer = () => {
        clearInterval(this.timerID);
        this.setState({isTicking: false});
    }


    render() {
        console.log(this.timerID);
    return (
      <div className="wrapper">
        <Header title="timer React"/>
        <Form setTime={this.setTime} />
        <Timer time={this.state.timeLeft}/>
        <Controls disableReset={!this.state.timeLeft ? true : undefined} disabled={this.state.isTicking} startTimer={this.startTimer} stopTimer={this.stopTimer} resetTime={this.resetTime}/>
    </div>
    );
  }
}

export default App;
