import React, { Component } from 'react'
import { Link } from 'react-router'

import './Profile.css'

class Profile extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  componentDidMount() {

  }

  render() {
    const chartData = {
      datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
    };

    const chartOptions = {
    };

    return(
      <main className='container'>
        <div className='pure-g'>
          <div className='pure-u-1-1'>
            <p id='name'>
              {this.props.authData.name}
            </p>
            <hr/>
          <img src='https://s3-us-west-1.amazonaws.com/random-stuff-guess/dorahacks/ring.png' alt=''/>
          <p id='energy'>628 kWh</p>
          <p id='produced'>Produced</p>
          <p>You saved 70.2 dollars</p>
          <Link to='/dashboard' id='detailButton' className='pure-u-1-1 pure-menu-link'>Details</Link>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
