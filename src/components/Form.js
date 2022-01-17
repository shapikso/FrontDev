import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputText: ' '};
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  inputText(e) {
    this.setState({
        inputText: e.target.value
      });
  }

  subminButton() {
      this.props.list(this.state.inputText)
  }

  render() {
    return (
        <div className="inputField">
            <input onChange={this.inputText.bind(this)} id="inp" type="text" placeholder="Add your new todo"></input>
            <button onClick={this.subminButton.bind(this)} className="add"> Add </button>
        </div>
    );
  }
}

export default Form;