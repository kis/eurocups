export function requestTeams(teams) {

  console.log('111')

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
  console.log('1')
	return function (dispatch) {
    console.log('2')
		dispatch(requestTeams(null))
		return fetch('../../assets/football/Euro2016/teams.json')
      .then(response => response.json())
      .then(response =>
        dispatch(receiveTeams(response))
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
