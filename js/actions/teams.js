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
		dispatch(requestTeams(null));
    teamsData().then(res => dispatch(receiveTeams(res)));
	}
}

async function teamsData() {
  let teamsData = await fetch('https://raw.githubusercontent.com/jokecamp/FootballData/master/UEFA_European_Championship/Euro%202016/players_json/teams.json');
  let res = await teamsData.json();
  return res.sheets.Teams;
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
    standingsData().then(res => dispatch(receiveStandings(res)));
  }
}

async function standingsData() {
  let stData = await fetch('https://raw.githubusercontent.com/jokecamp/FootballData/master/sports-open-data/standings/uefa-euro-201616.json');
  let res = await stData.json();
  return res;
}