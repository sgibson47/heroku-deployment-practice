import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      things: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3001/api/v1/things")
      .then(response => {
        return response.json()})
      .then(things=>{
        console.log(things)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Things!</h1>
      </div>
    );
  }
}

export default App;
