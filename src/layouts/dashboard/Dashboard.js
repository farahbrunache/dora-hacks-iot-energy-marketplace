import React, { Component } from 'react'

import './Dashboard.css'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  componentDidMount() {
    const chart = document.getElementById('mychart').getContext('2d');
    const data = {
      labels: ['Jun 22', 'Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27'],
      fillColor: ["rgba(0,10,220,0.5)","rgba(220,0,10,0.5)","rgba(220,0,0,0.5)","rgba(120,250,120,0.5)" ],
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
        datasets: [{
            label: '# of Votes',
            data: [5.0, 4.6, 4.9, 4.78, 5.0, 4.97],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
  }

  render() {


    const options = {
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }};

    return(
      <main className='containerr'>
        <div className='pure-g'>
          <div className='pure-u-1-1'>
            <h1>Dashboard</h1>
            <canvas id='mychart'/>
            <img src='https://s3-us-west-1.amazonaws.com/random-stuff-guess/dorahacks/dashboard.png' alt=''/>
            </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
