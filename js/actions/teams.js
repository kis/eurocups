export function requestTeams(teams) {
	return {
		type: 'REQUEST_TEAMS',
		teams
	}
}

export function receiveTeams(teams) {
	return {
		type: 'RECEIVE_TEAMS',
		teams
	}
}

export function filterTeamsByGroup(group) {
	return {
		type: 'FILTER_TEAMS',
		group
	}
}

export function fetchTeams() {
	return function (dispatch) {
		dispatch(requestTeams(null))
		return fetch('/assets/football/Euro2016/teams.json')
			.then(response => response.json())
			.then(response =>
      	dispatch(receiveTeams(response.sheets.Teams))
      )
	}
}

export function toggleTeams() {
  return {
    type: 'TOGGLE_TEAMS'
  }
}

export function toggleStandings() {
  return {
    type: 'TOGGLE_STANDINGS'
  }
}

export function receiveStandings(standings) {
  return {
    type: 'RECEIVE_STANDINGS',
    standings
  }
}

export function fetchStandings() {
  return function (dispatch) {
    return fetch('/assets/football/uefa-euro-201616.json')
      .then(response => response.json())
      .then(response =>
        dispatch(receiveStandings(response))
      )
  }
}
