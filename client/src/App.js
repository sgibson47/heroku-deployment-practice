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
        this.setState({
          things: things
        })
      })
  }

  render() {
    const thingsList = this.state.things.map((thing)=>{
      return <li>There are {thing.number} {thing.name}s</li>
    })
    return (
      <div className="App">
        <h1>Things!</h1>
        <ul>
          {thingsList}
        </ul>
      </div>
    );
  }
}

export default App;
