import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppContainer from './containers/AppContainer';
import TeamsContainer from './containers/TeamsContainer';
import TeamContainer from './containers/TeamContainer';
import PlayerContainer from './containers/PlayerContainer/PlayerContainer';

const App = () => (
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={AppContainer} />
				<Route path="/teams" component={TeamsContainer} />
				<Route path="/teams/:team" component={TeamContainer} />
				<Route path="/teams/:team/:player" component={PlayerContainer} />
			</div>
		</Router>
	</Provider>
);

export default App;