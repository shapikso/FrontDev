import React from 'react';


class List extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
        <div className='list'>
        <p>{this.props.taskText}</p>
        <div className="divBtn">
            <button><i className="fas fa-trash"></i></button>
            <button><i className="fas fa-check"></i></button>
         </div>
      </div>
    );
  }
}

export default List;