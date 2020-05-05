import React, { Component } from 'react'
import Chart from 'chart.js'

class BarChart extends Component {

    getData = () => {
        fetch("/stocks/1")
        .then(response => response.json())
        .then(jData => this.prepareData(jData))
        .then(data => this.createChart(data))
        .catch(err => console.log(err))
    }

    prepareData = (data) => {
        const chartData = {
            labels: [],
            datasets: [
              {
                label: 'Avg price',
                data: []
              }
  
            ]
          }
        data.prices.forEach(price => {
            chartData.labels.push(price.created_at);
            chartData.datasets[0].data.push(price.avg_price)
        })

        return chartData

    }

    createChart = (data) => {
        const ctx = document.querySelector('#stockPrices')
	    const pricesChart = new Chart(ctx, {
		type: 'line',
		data: data
			})
    }

    componentDidMount () {
        this.getData();
    }

    render() {
        return(
            <> 
            <h1>Stock Prices</h1>
            <canvas id="stockPrices" width="300" height="100"></canvas>
            </>
        )
    }

}

export default BarChart