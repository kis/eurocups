import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './teams.css';

class Teams extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
    	teams: PropTypes.object.isRequired
  	}

	static contextTypes = {
    	router: React.PropTypes.object
  	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	openTeamView(team) {
		this.context.router.push('/teams/' + team.toLowerCase());
	}

	render() {
		console.log('Teams', this.props)
		// <Link to="/teams/team">Go!</Link>

		return (
			<div className="teams-container">
				{this.props.teams.teams ? this.props.teams.teams.map((result, i) => {
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
				}) : <div>Loading teams...</div>}
			</div>
		);
	}
}

export default Teams;
