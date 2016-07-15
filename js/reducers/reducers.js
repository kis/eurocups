import { combineReducers } from 'redux';

var initTeams = {
  activeGroupFilter: 'SHOW ALL',
  groups: ['SHOW ALL', 'A', 'B', 'C', 'D', 'E', 'F'],
  showTeams: true,
  showStandings: false,
  teams: [],
  standings: null
};

function teams(state = initTeams, action) {
  switch (action.type) {
    case 'REQUEST_TEAMS':
    return {...state, teams: action.teams};

    case 'RECEIVE_TEAMS':
    return {...state, teams: action.teams};

    case 'FILTER_TEAMS':
    return {...state, activeGroupFilter: action.group};

    case 'RECEIVE_STANDINGS':
    return {...state, standings: action.standings};

    case 'TOGGLE_TEAMS':
    return {...state, showTeams: !state.showTeams};

    case 'TOGGLE_STANDINGS':
    return {...state, showStandings: !state.showStandings};

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
