import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };

    return (
      <main className="containerr">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <canvas id="mychart" />
            <img
              src="https://s3-us-west-1.amazonaws.com/random-stuff-guess/dorahacks/dashboard.png"
              alt=""
            />
          </div>
        </div>
      </main>
    );
  }
}

export default Dashboard;
