import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    count : 0
  };

  ADD = () => {
    this.setState(current => ({count : current.count + 1}));
  };
  MINUS = () => {
    this.setState(current => ({count : current.count - 1}));
  };

  render(){
    return(
    <div>
      <h1>the number is : {this.state.count}</h1>
      <button onClick={this.ADD}>ADD</button>
      <button onClick={this.MINUS}>MINUS</button>
    </div>
    ); 
  }

}

export default App;
