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
    return(
      <main className='profile-container'>
        <div className='pure-g'>
          <div className='pure-u-1-1'>
            <p id='name'>
              {this.props.authData.name}
            </p>
          <img src='https://s3-us-west-1.amazonaws.com/random-stuff-guess/dorahacks/ring.png' alt=''/>
          <p id='energy'>628 kWh Produced</p>
          <p>You saved 70.2 dollars</p>
          <Link to='/market' id='detailButton' className='pure-u-1-1 pure-menu-link'>Market</Link>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
