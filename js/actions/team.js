export function requestTeam(team) {
  return {
    type: 'REQUEST_TEAM',
    team: team
  }
}

export function receiveTeam(team) {
  return {
    type: 'RECEIVE_TEAM',
    team: team
  }
}

export function fetchTeam(team) {
	return function (dispatch) {
		dispatch(requestTeam(null))
		return fetch(`/assets/football/Euro2016/${team}-players.json`)
      .then(response => response.json())
      .then(response =>
        dispatch(receiveTeam(response.sheets.Players))
      )
	}
}
