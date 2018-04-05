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
    const textLength = text.length
    this.setState({ textLength, text })
  }

  deleteChar = (e, index) => 

  render() {
    const charList = this.state.text.split('')
    const characters = charList.map( (c, index) => <CharComponent letter={c} key={index} />)

    return (
      <div className="App">
        <input onChange={this.changeListener}/>
        <Validation textLength={this.state.textLength} />
        {characters}
      </div>
    );
  }
}

export default App;
