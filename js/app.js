import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppContainer from './containers/AppContainer';

if (process.env.NODE_ENV !== 'production') {
	const {whyDidYouUpdate} = require('why-did-you-update');
	whyDidYouUpdate(React);
}

const App = () => (
	<Provider store={store}>
	    <AppContainer />
	</Provider>
);

export default App;