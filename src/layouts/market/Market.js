import React, { Component } from 'react';
import { Chart } from 'react-chartjs';

import './Market.css';

class Market extends Component {
  constructor(props, { authData }) {
    super(props);
    authData = this.props;
  }

  componentDidMount() {}

  render() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        }
      ]
    };
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <div class="container-fluid">
              <div class="row">
                <div class="col-6">
                  <Chart type="line" data={data} />
                </div>
                <div class="col-6">
                  <Chart type="line" data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Market;
