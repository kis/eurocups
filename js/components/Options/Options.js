import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './options.css';

export default class Options extends Component {
	static propTypes = {
  		teams: PropTypes.object.isRequired
  	}

	toggleTeams() {
		const { actions } = this.props;
		actions.toggleTeams();
	}

	toggleStandings() {
		const { actions } = this.props;
		actions.toggleStandings();
	}

	render() {
		const { teams } = this.props;

		return (
		    <div className="options-container">
				<div className={teams.showTeams ? "active-option" : null} 
					 onClick={() => this.toggleTeams()}>
					 SHOW TEAMS
				</div>
				<div className={teams.showStandings ? "active-option" : null} 
					 onClick={() => this.toggleStandings()}>
					 SHOW STANDINGS
				</div>
			</div>
		);
	}
}