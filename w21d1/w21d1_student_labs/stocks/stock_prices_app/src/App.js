import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart'

class App extends Component {
  render() {
    return(
      <>
      <h1>Stock Prices</h1>
      <BarChart />
      </>
    )
  }

}

export default App;
