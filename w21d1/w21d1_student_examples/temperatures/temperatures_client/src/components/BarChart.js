import React, { Component } from 'react';
import Chart from 'chart.js'

class BarChart extends Component {
    prepareData = (data) => {
        const chartData = {
          labels: [],
          datasets: [
            {
              label: 'Avg high temps',
              data: []
            },
            {
                label: 'Avg low temps',
                data: []
            }

          ]
        }

        data.temperatures.forEach((temperature) => {
            chartData.labels.push(temperature.month);
            chartData.datasets[0].data.push(temperature.average_high_f);
            chartData.datasets[1].data.push(temperature.average_low_f);
          });
    
        return chartData
      }
    
      createChart = (data) => {
        const ctx = document.querySelector('#temperatures')
        const tempsChart = new Chart(ctx, {
          type: 'bar',
          data: data
        })
      }
    
      getData = () => {
        fetch("/locations/1")
        .then(response => response.json())
        .then(jData => this.prepareData(jData))
        .then(data => this.createChart(data))
        .catch(err => console.log(err))
      }
    
      componentDidMount() {
        this.getData()
      }


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