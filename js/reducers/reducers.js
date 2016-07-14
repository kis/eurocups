import { combineReducers } from 'redux';
import * as actions from '../actions/actions';

var initTeams = {
  activeGroupFilter: 'SHOW ALL',
  groups: ['SHOW ALL', 'A', 'B', 'C', 'D', 'E', 'F'],
  teams: []
};

function teams(state = initTeams, action) {
  switch (action.type) {
    case 'REQUEST_TEAMS':
    return {...state, teams: action.teams};

    case 'RECEIVE_TEAMS':
    return {...state, teams: action.teams};

    case 'FILTER_TEAMS':
    return {...state, activeGroupFilter: action.group};

    default:
    return {...state};
  }
}

var initTeam = {
  team: null
};

function team(state = initTeam, action) {
  switch (action.type) {
    case 'REQUEST_TEAM':
    return {...state, team: action.team};

    case 'RECEIVE_TEAM':
    return {...state, team: action.team};

    default:
    return {...state};
  }
}

const euroApp = combineReducers({
  teams,
  team
});

export default euroApp;
