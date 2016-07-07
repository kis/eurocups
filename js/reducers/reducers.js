import { combineReducers } from 'redux';
import * as actions from '../actions/actions';

var init = {
  started: false,
  teams: []
};

function standings(state = init, action) {
  switch (action.type) {
    case 'INIT':
    return {...state, teams: action.teams};

    default:
    return {...state};
  }
}

const euroApp = combineReducers({
  standings
});

export default euroApp;