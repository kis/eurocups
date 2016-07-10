import { combineReducers } from 'redux';
import * as actions from '../actions/actions';

var init = {
  started: false,
  teams: []
};

function standings(state = init, action) {
  switch (action.type) {
    case 'REQUEST_TEAMS':
    return {...state, teams: action.teams};

    case 'RECEIVE_TEAMS':
    return {...state, teams: action.teams};

    default:
    return {...state};
  }
}

const euroApp = combineReducers({
  standings
});

export default euroApp;
