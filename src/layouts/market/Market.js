import React, { Component } from 'react';
import MarketContract from '../../../build/contracts/Market';
import getWeb3 from '../../util/getWeb3';

import './Market.css';

class Market extends Component {
  constructor(props) {
    super(props);

    this.state = {
      web3: null,
      marketInstance: null
    };
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3
        });

        // Instantiate contract once web3 provided.
        this.instantiateContract(this);
      })
      .catch(() => {
        console.log('Error finding web3.');
      });
  }

  async instantiateContract(comp) {
    const contract = require('truffle-contract');
    const marketContract = contract(MarketContract);
    marketContract.setProvider(this.state.web3.currentProvider);

    console.log('working');
    // Set up instance
    this.state.web3.eth.getAccounts(function(error, accounts) {
      console.log('got accounts');
      marketContract.deployed().then(instance => {
        console.log('deployed');
        comp.setState({
          marketInstance: instance
        });
        console.log(comp.state);
        instance.allEvents(function(error, log) {
          if (!error) {
            console.log(log.event);
          }
        });
      });
    });
  }

  sellEnergy(price, energy) {
    const marketInstance = this.state.marketInstance;
    const w3 = this.state.web3;
    w3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      } else {
        if (accounts.length <= 0) {
          alert(
            'No account is unlocked, please authorize an account on Metamask.'
          );
        }
        marketInstance
          .sellEnergy(w3.utils.toWei(`${price}`, 'ether'), energy, {
            from: accounts[0]
          })
          .then(result => {
            console.log('SOLD ENERGY!');
            this.props.sellItem({ address: accounts[0], price, energy });
          })
          .catch(error => {
            console.log(error.message);
          });
      }
    });
  }

  buyEnergy(itemId, price) {
    const marketInstance = this.state.marketInstance;
    const w3 = this.state.web3;
    w3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      } else {
        if (accounts.length <= 0) {
          alert(
            'No account is unlocked, please authorize an account on Metamask.'
          );
        }
        marketInstance
          .buyEnergy(itemId, {
            from: accounts[0],
            value: w3.utils.toWei(`${price}`, 'ether')
          })
          .then(result => {
            console.log('Bought ENERGY!');
            this.props.buyItem(itemId);
          })
          .catch(error => {
            console.log(error.message);
          });
      }
    });
  }

  render() {
    return (
      <main>
        <div className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://s3-us-west-1.amazonaws.com/random-stuff-guess/dorahacks/world-map-orange.svg"
                  id="map"
                  alt=""
                />
                <h3>Sell</h3>
                <p>Looks like you have 15kWh in surplus.</p>
                <p>Sell now to earn!</p>
                <a
                  className="btn btn-secondary"
                  onClick={() =>
                    this.sellEnergy(1, 10)
                  }
                >
                  Sell
                </a>
              </div>
              <div className="col-md-6">
                {this.props.market.items.map(item => {
                  return (
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{item.energy} kWh</h5>
                        <p className="card-text">{item.price} Eth</p>
                        <a
                          className="btn btn-primary"
                          onClick={() => this.buyEnergy(item.id, item.price)}
                        >
                          Buy
                        </a>
                      </div>
                    </div>
                  );
                })}
                {/*<button type="button" className="btn btn-light" onClick={() => this.sellEnergy(5, 100)}>Sell</button>*/}
                {/*<button type="button" className="btn btn-light" onClick={() => this.buyEnergy(0, 5)}>Buy</button>*/}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Market;
