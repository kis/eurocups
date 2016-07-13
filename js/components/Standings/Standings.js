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
					return <div className="team-item" key={i} onClick={this.openTeamView.bind(this, result.Team)}>
						<div className="team-group">{result.Group}</div>
						<div className="team-title">{result.Team}</div>
						<div className="team-coach clearfix">
							<div>Coach</div>
							<div>{result.Coach}</div>
						</div>
						<div className="team-bio">{result.Bio}</div>
						<div className="team-rank clearfix">
							<div>FIFA Ranking</div>
							<div>{result['FIFA ranking']}</div>
						</div>
					</div>
				}) : <div>Loading...</div>}
			</div>
		);
	}
}

Standings.propTypes = propTypes;

export default Standings;
