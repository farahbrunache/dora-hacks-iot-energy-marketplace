import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { UserIsAuthenticated } from './util/wrappers.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Layouts
import App from './App';
import Home from './layouts/home/Home';
import Market from './layouts/market/Market';
import Profile from './user/layouts/profile/Profile';

// Redux Store
import store from './store'
import MarketContainer from "./layouts/market/market-container";

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="profile" component={UserIsAuthenticated(Profile)} />
          <Route path="market" component={UserIsAuthenticated(MarketContainer)} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
