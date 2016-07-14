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

export function filterTeamsByGroup(group) {
  return {
    type: 'FILTER_TEAMS',
    group: group
  }
}

export function fetchTeams() {
	return function (dispatch) {
		// dispatch(requestTeams(null))
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

export function fetchTeam(team) {
	return function (dispatch) {
		// dispatch(requestTeam(null))
		return fetch(`/assets/football/Euro2016/${team}-players.json`)
      .then(response => response.json())
      .then(response =>
        dispatch(receiveTeam(response.sheets.Players))
      )
	}
}

export function receiveStandings(standings) {
  return {
    type: 'RECEIVE_STANDINGS',
    standings: standings
  }
}

export function fetchStandings() {
	return function (dispatch) {
		return fetch('/assets/football/uefa-euro-201616.json')
      .then(response => response.json())
      .then(response =>
        dispatch(receiveStandings(response.s))
      )
	}
}
