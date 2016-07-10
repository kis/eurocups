export function requestTeams(teams) {
  return {
    type: 'REQUEST_TEAMS',
    teams: teams
  }
}

export function receiveTeams(teams) {
  return {
    type: 'RECEIVE_TEAMS',
    teams: teams
  }
}

export function fetchTeams() {
	return function (dispatch) {
		dispatch(requestTeams(null))
		return fetch('../../assets/football/Euro2016/teams.json')
      .then(response => response.json())
      .then(response =>
        dispatch(receiveTeams(response.sheets.Teams))
      )
	}

	// fetch('../../assets/football/Euro2016/teams.json').then(response => {
	// 	return response.json();
	// }).then(response => {
	// 	store.dispatch({
	// 		type: 'INIT',
	// 		teams: response.sheets.Teams
	// 	});
	// });
}
