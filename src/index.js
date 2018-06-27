import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated } from './util/wrappers.js'

// Layouts
import App from './App'
import Home from './layouts/home/Home'
import Dashboard from './layouts/dashboard/Dashboard'
import Market from './layouts/market/Market'
import Profile from './user/layouts/profile/Profile'

// Redux Store
import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Market}>
          <IndexRoute component={Home} />
          <Route path="dashboard" component={Dashboard} />
          <Route path="profile" component={Profile} />
          <Route path="market" component={Market} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
