import 'whatwg-fetch';
import store from '../store/store';

export function getTeams() {
	fetch('../../assets/football/Euro2016/teams.json').then(function(response) {
		return response.json();
	}).then(function(response) {
		store.dispatch({
			type: 'INIT',
			teams: response.sheets.Teams
		});
	});
}