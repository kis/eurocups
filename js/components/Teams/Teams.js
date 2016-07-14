import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import * as util from '../../util/util'; 

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
		team = team.replace(/\s/g, '-');
		this.context.router.push('/teams/' + team.toLowerCase());
	}

	filterByGroup(group) {
		const { actions } = this.props;
		actions.filterTeamsByGroup(group);
	}

	render() {
		console.log('Teams', this.props)
		// <Link to="/teams/team">Go!</Link>

		var filteredTeams = this.props.teams.teams.filter((res, i) => {
			return res.Group === this.props.teams.activeGroupFilter || this.props.teams.activeGroupFilter === "SHOW ALL";
		});

		return (
			<div>
				<div className="teams-groups">
					{this.props.teams.groups.map((res, i) => {
						return <div key={i} onClick={this.filterByGroup.bind(this, res)}>{res}</div>
					})}
				</div>
				<div className="teams-container">
					{filteredTeams ? filteredTeams.map((result, i) => {
						return <div className="team-item" style={util.getTeamColor()} key={i} onClick={this.openTeamView.bind(this, result.Team)}>
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
			</div>
		);
	}
}

export default Teams;
