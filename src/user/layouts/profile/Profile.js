import React, { Component } from 'react'
import { Link } from 'react-router'


class Profile extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  componentDidMount() {

  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <p>
              {this.props.authData.name}
            </p>
            <p>
              {this.props.authData.address}
            </p>
          </div>
          <div class="pure-u-1-1" id='myChart'>
          </div>
          <div class="pure-u-1-1" id='energy'>
          <p>628 kWh Produced</p>
          <p>You saved some dollars</p>
          </div>
          <Link to="/dashboard" className="pure-u-1-1 pure-menu-link">Details</Link>
        </div>
      </main>
    )
  }
}

export default Profile
