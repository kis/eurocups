export function requestTeam(team) {
	return {
		type: 'REQUEST_TEAM',
		team
	}
}

export function receiveTeam(team) {
	return {
		type: 'RECEIVE_TEAM',
		team
	}
}

export function fetchTeam(team) {
	return function (dispatch) {
		dispatch(requestTeam(null))
		teamData(team).then(res => dispatch(receiveTeam(res)));
	}
}

async function teamData(team) {
	let teamData = await fetch(`https://raw.githubusercontent.com/jokecamp/FootballData/master/UEFA_European_Championship/Euro%202016/players_json/${team}-players.json`);
	let res = await teamData.json();
	return res.sheets.Players;
}
