import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import teams from './teams';
import team from './team';

const euroApp = combineReducers({
	teams,
	team,
	form: formReducer
});

export default euroApp;
