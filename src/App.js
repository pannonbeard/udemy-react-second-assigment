import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state={
    text: '',
    textLength: 0
  }
  changeListener = (e) => {
    const text = e.target.value
    const textLength = string.length
    this.setState({ textLength, text })
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.changeListener}/>
        <Validation textLength={this.state.textLength} />
        <CharComponent />
      </div>
    );
  }
}

export default App;
