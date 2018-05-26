import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

console.log('mount');

ReactDOM.render((
	<App />
), document.getElementsByClassName('root')[0]);