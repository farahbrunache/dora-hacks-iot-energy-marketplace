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
          <div class="pure-u-1-1" id='myChart'>
          </div>
          <p>628 kWh Produced</p>
          <p>You saved 58.2 dollars</p>
          <Link to="/dashboard" id='detailButton' className="pure-u-1-1 pure-menu-link">Details</Link>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
