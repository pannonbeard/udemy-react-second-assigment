import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation'

class App extends Component {
  state={
    textLength: 0
  }
  changeListener = (e) => {
    const string = e.target.value
    const textLength = string.length
    this.setState({ textLength })
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.changeListener}/>
        <p>{this.state.textLength}</p>
      </div>
    );
  }
}

export default App;
