import React, { Component, PropTypes } from 'react';

import './standings.css';

class Standings extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
  	teams: PropTypes.object.isRequired
	}

  static contextTypes = {
  	router: React.PropTypes.object
	}

  componentWillMount() {
  	const { actions } = this.props;
  	actions.fetchStandings();
  }

  openTeamView(team) {
		team = team.replace(/\s/g, '-');
		this.context.router.push('/teams/' + team.toLowerCase());
	}

  renderGroup(group, data) {
		let headers = Object.keys(data[0].stats);

  	return (
  		<div>
	  		<div className="group-table-header">
	  			<div>Team</div>
		  			{ headers.map((key, i) => {
							key = key.replace('_', ' ');
							return <div key={i}>{ key }</div>
		  			})}
	  		</div>
	  		{ data.map((key, i) => {
		  		return <div key={i} className="group-table-line" onClick={this.openTeamView.bind(this, key.team)}>
		  			<div>{ key.team }</div>
		  				{ Object.keys(key.stats).map((bkey, j) => {
			  				return <div key={j}>{ key.stats[bkey] }</div>
			  			})}
		  			</div>
		  	})}
		  </div>
  	);
  }

	render() {
		const { teams } = this.props;

		let st = teams.standings ? Object.keys(teams.standings) : null;

		let filteredSt = st ? st.filter((res, i) => {
			return res == `Group ${teams.activeGroupFilter}` || teams.activeGroupFilter === "SHOW ALL";
		}) : null;

		return (
		  <div className="standings-container">
		    {filteredSt ? filteredSt.map((key, i) => {
  				return <div className="group-container" key={i}>
  					<div className="group-title">{key}</div>
  						<div className="group-table">
  							{ this.renderGroup(key, teams.standings[key]) }
  						</div>
  					</div>
  				}) : null}
			</div>
		);
	}
}

export default Standings;
