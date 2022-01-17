import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    date: new Date().getTime(),
    stalkerDate : new Date("Dec 8, 2022 00:00:01").getTime(),
    numberOfDays: '',
    numberOfHours: '',
    numberOfSeconds: '',
    timeLeft: 0,
  };
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date().getTime(),
      timeLeft:   this.state.stalkerDate - this.state.date,
      numberOfDays: Math.floor(this.state.timeLeft / (1000 * 60 * 60 * 24)).toString(),
      numberOfHours: Math.floor((this.state.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString(),
      numberOfMinutes: Math.floor((this.state.timeLeft % (1000 * 60 * 60)) / (1000 * 60)).toString(),
      numberOfSeconds: Math.floor((this.state.timeLeft % (1000 * 60)) / 1000).toString()
    });
  }

  render() {
    return (
      <div className='timer'>
        <h1>До выхода Сталкера еще</h1>
        <h1>{this.state.numberOfDays} Дня {this.state.numberOfHours} Часа {this.state.numberOfMinutes} Минуты {this.state.numberOfSeconds} секунды.</h1>
      </div>
    );
  }
}

export default App;
