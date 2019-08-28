import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Hello, World!'
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div className="App">
        <h1>{ title }</h1>
      </div>
    );
  }
}

export default hot(module)(App);
