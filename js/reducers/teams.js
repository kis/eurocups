var initTeams = {
	activeGroupFilter: 'SHOW ALL',
	groups: ['SHOW ALL', 'A', 'B', 'C', 'D', 'E', 'F'],
	showTeams: true,
	showStandings: false,
	teams: [],
	standings: null
};

export default function teams(state = initTeams, action) {
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