import React from 'react';
import Button from "../commons/Button";
import './form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {inputText: ''};
  }

  componentDidMount() {
    this.myRef.current.focus();
  }

  handleChangeInput = (e) => this.setState({ inputText: e.target.value});

  handleSubmit = ()  => {
      this.props.setTime(this.state.inputText);
      this.setState({inputText: ''})
  }

  render() {
    return (
        <div className="inputField">
            <input ref={this.myRef} onChange={this.handleChangeInput} placeholder="Set time" value={this.state.inputText}/>
            <Button disabled={!this.state.inputText.trim()} onClickHandler={this.handleSubmit} title='set'/>
        </div>
    );
  }
}

export default Form;