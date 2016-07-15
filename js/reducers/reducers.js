import { combineReducers } from 'redux';

var initTeams = {
  activeGroupFilter: 'SHOW ALL',
  groups: ['SHOW ALL', 'A', 'B', 'C', 'D', 'E', 'F'],
  isTeamsActive: true,
  isStandingsActive: false,
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

    case 'TOGGLE_TEAMS':
    return {...state, isTeamsActive: !state.isTeamsActive};

    case 'TOGGLE_STANDINGS':
    return {...state, isStandingsActive: !state.isStandingsActive};

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

var initStandings = {
  standings: null
};

function standings(state = initStandings, action) {
  switch (action.type) {
    case 'RECEIVE_STANDINGS':
    return {...state, standings: action.standings};

    default:
    return {...state};
  }
}

const euroApp = combineReducers({
  teams,
  team,
  standings
});

export default euroApp;
