import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppContainer from './containers/AppContainer';

const App = () => (
	<Provider store={store}>
	    <AppContainer />
	</Provider>
);

export default App;