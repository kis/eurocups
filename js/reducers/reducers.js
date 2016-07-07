import { combineReducers } from 'redux';
import * as actions from '../actions/actions';

var init = {
  started: false
};

function standings(state = init, action) {
  switch (action.type) {
    case 'INIT':
    return {...state, started: true};

    default:
    return {...state};
  }
}

const euroApp = combineReducers({
  standings
});

export default euroApp;