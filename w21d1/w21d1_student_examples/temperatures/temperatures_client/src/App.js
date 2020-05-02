import React, { Component } from 'react';
import BarChart from './components/BarChart.js'
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch("/locations")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <BarChart />
      </div>
    );
  }
}

export default App;