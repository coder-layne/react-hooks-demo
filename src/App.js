import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <Todo />
        </header>
      </div>
    );
  }
}

export default App;
