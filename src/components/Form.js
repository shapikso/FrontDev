import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputText: ''};
  }

  componentDidMount() {
    
  }

  handleChangeInput = (e) => this.setState({ inputText: e.target.value});

  handleSubmit = ()  => {
      this.props.addTolist(this.state.inputText);
      this.setState({inputText: ''})
  }

  render() {
    return (
        <div className="inputField">
            <input onChange={this.handleChangeInput} placeholder="Add your new todo" value={this.state.inputText}></input>
            <button onClick={this.handleSubmit} className="add"> Add </button>
        </div>
    );
  }
}

export default Form;