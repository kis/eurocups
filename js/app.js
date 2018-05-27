import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import store from './store/store';
import history from './history';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppContainer from './containers/AppContainer';
import TeamsContainer from './containers/TeamsContainer';
import TeamContainer from './containers/TeamContainer';
import PlayerContainer from './containers/PlayerContainer/PlayerContainer';

const App = () => (
	<Provider store={store}>
	    <AppContainer />
	</Provider>
);

export default App;