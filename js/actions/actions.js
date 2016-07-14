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
		return fetch('/assets/football/Euro2016/teams.json')
      .then(response => response.json())
      .then(response =>
        dispatch(receiveTeams(response.sheets.Teams))
      )
	}
}

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

export function fetchTeam() {
	return function (dispatch) {
		dispatch(requestTeam(null))
		return fetch('/assets/football/Euro2016/teams.json')
      .then(response => response.json())
      .then(response =>
        dispatch(receiveTeam(response.sheets.Teams))
      )
	}
}
