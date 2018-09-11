import React, { Component } from 'react';
import './App.css';
import Hello from './Hello.js';
import NameAge from './NameAge.js';
import Age from './Age.js';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <br />
        <NameAge />
        <br />
        <Age />
      </div>
    );
  }
}

export default App;
