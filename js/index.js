import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '../css/styles.css';

import store from './store/store';

import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import AppContainer from './components/AppContainer';
import Standings from './components/Standings/Standings';

const routes = {
  path: '/',
  component: AppContainer,
  indexRoute: { component: Standings }
};

ReactDOM.render((
	<Provider store={store}>	
	  <Router routes={routes} history={browserHistory} />
 	</Provider>
), document.getElementsByClassName('root')[0]);

