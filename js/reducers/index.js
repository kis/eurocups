import { combineReducers } from 'redux';

import teams from './teams';
import team from './team';

const euroApp = combineReducers({
	teams,
	team
});

export default euroApp;
