import React, { Component, PropTypes } from 'react';

import './standings.css';

const propTypes = {
  standings: PropTypes.object.isRequired
};

class Standings extends Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	openTeamView(team) {
		console.log(team)
	}

	render() {
		return (
			<div className="teams-container">
				{this.props.standings.teams ? this.props.standings.teams.map((result, i) => {
					return <div className="team-item" key={i}>
						<div>{result.Group}</div>
						<div className="team-title" onClick={this.openTeamView.bind(this, result.Team)}>{result.Team}</div>
						<div>Coach: {result.Coach}</div>
						<div>Bio: {result.Bio}</div>
						<div>FIFA Ranking: {result['FIFA ranking']}</div>
					</div>
				}) : <div>Loading...</div>}
			</div>
		);
	}
}

Standings.propTypes = propTypes;

export default Standings;
