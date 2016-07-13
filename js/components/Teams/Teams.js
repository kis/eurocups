import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './teams.css';

const propTypes = {
  teams: PropTypes.object.isRequired
};

class Teams extends Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	openTeamView(team) {
		console.log(team)
		// this.context.router.push('/team');
	}

	render() {
		return (
			<div className="teams-container">
				{this.props.teams.teams ? this.props.teams.teams.map((result, i) => {
					return <Link to="/team" key={i}><div className="team-item" key={i} onClick={this.openTeamView.bind(this, result.Team)}>
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
					</div></Link>
				}) : <div>Loading...</div>}
			</div>
		);
	}
}

Teams.propTypes = propTypes;

export default Teams;
