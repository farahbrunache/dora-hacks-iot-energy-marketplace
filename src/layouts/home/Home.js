import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <main className="home-container">
        <div class="container-fluid" id="home">
          <span className="title"> SUNEE </span>
          <h2 className="subtitle">
            {' '}
            A Decentralized Solar Exchange Platform{' '}
          </h2>
        </div>
      </main>
    );
  }
}

export default Home;
