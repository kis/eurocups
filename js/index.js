import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { Router, browserHistory } from 'react-router';

import AppContainer from './containers/AppContainer';
import TeamsContainer from './containers/TeamsContainer';
import TeamContainer from './containers/TeamContainer';
import PlayerContainer from './containers/PlayerContainer/PlayerContainer';

const routes = {
	path: '/',
	component: AppContainer,
	childRoutes: [
		{
			path: '/teams',
			component: TeamsContainer
		},
		{
			path: '/teams/:team',
			component: TeamContainer
		},
		{
			path: '/teams/:team/:player',
			component: PlayerContainer
		}
	]
};

ReactDOM.render((
	<Provider store={store}>
		<Router routes={routes} history={browserHistory} />
	</Provider>
), document.getElementsByClassName('root')[0]);
