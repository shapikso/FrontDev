import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {inputText: ''};
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

  handleChangeInput = (e) => this.setState({ inputText: e.target.value});

  handleSubmit = ()  => {
      this.props.addTolist(this.state.inputText);
      this.setState({inputText: ''});
  }

  render() {
      return (
          <div className="inputField">
              <input ref={this.inputRef} onChange={this.handleChangeInput} placeholder="Add your new todo" value={this.state.inputText}></input>
              <button disabled={!this.state.inputText.trim()} onClick={this.handleSubmit} className="add"> Add </button>
          </div>
      );
  }
}

export default Form;