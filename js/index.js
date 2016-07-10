import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import '../css/styles.css';
import AppContainer from './containers/AppContainer';
import StandingsContainer from './containers/StandingsContainer';

const routes = {
  path: '/',
  component: AppContainer,
  indexRoute: { component: StandingsContainer }
};

ReactDOM.render((
	<Provider store={store}>
	  <Router routes={routes} history={browserHistory} />
 	</Provider>
), document.getElementsByClassName('root')[0]);
