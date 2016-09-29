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

		async function getTeamData() {
			let data = await teamData(team);
			dispatch(receiveTeam(data));
		}

		getTeamData();
	}
}

async function teamData(team) {
	let teamData = await fetch(`/assets/football/Euro2016/${team}-players.json`);
	let res = await teamData.json();
	return res.sheets.Players;
}
