import React, { Component } from 'react';
import Chart from 'chart.js'

class BarChart extends Component {
  render () {
    return (
      <>
        <h1>Temperatures</h1>
        <canvas id="temperatures" width="300" height="100"></canvas>
      </>
    )
  }
}

export default BarChart