import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import covidJsonData from './Hooks/Covid.json'



const positive = covidJsonData.positiveIncrease;
const negative = covidJsonData.negativeIncrease;
const deathIncrease  =covidJsonData.deathIncrease;
const hospitalizedIncrease = covidJsonData.hospitalizedIncrease;  
class ChartVisuals extends Component {
  

  constructor(props) {
    super(props);

    this.state = {
      
      options: {
        dataLabels:{
            series: [positive, negative, deathIncrease, ],
      labels: ['Positive', 'Negative', 'Deaths', ],
          enabled: true,
        
        }
      ,
      legend: {
        show: false
      },
      },
      
      series: [positive, negative, deathIncrease, ],
      labels: ['Positive', 'Negative', 'Deaths', ],
      chartOptions: {
        labels: ['Positive', 'Negative', 'Deaths'],
        formatter: function (seriesName) {
          return 'cases'
        }
      }
      

    }
  }

  render() {

    return (
      <div className="donut">
        <div class='chartLegend'>
       
        <div><span className='donut__firstLegend'>.</span>Positive</div>
        <div><span className='donut__secondLegend'>.</span>Negative</div>
        <div><span className='donut__thirdLegend'>.</span>Deaths</div>
        </div>
        <Chart className='actualChart' options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default ChartVisuals;