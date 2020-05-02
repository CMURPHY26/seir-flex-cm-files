import React, { Component } from 'react'
import Chart from 'chart.js'

class BarChart extends Component {
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