import React, { Component, PropTypes } from 'react';

import './standings.css';

class Standings extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
  		teams: PropTypes.object.isRequired
  	}

  	componentWillMount() {
  	    const { actions } = this.props;
  		actions.fetchStandings();
  	}

  	renderGroup(group, data) {
  		return (
  			<div>
	  			<div className="group-table-header">
	  				<div>Team</div>
	  				<div>Conceded</div>
	  				<div>Draws</div>
	  				<div>Goal difference</div>
	  				<div>Losts</div>
	  				<div>Macthes played</div>
	  				<div>Points</div>
	  				<div>Scores</div>
	  				<div>Wins</div>
	  			</div>
	  			{ data.map((key, i) => {
		  			return <div key={i} className="group-table-line">
		  				<div>{ key.team }</div>
		  				<div>{ key.stats.conceded }</div>
		  				<div>{ key.stats.draws }</div>
		  				<div>{ key.stats.goal_difference }</div>
		  				<div>{ key.stats.losts }</div>
		  				<div>{ key.stats.macthes_played }</div>
		  				<div>{ key.stats.points }</div>
		  				<div>{ key.stats.scores }</div>
		  				<div>{ key.stats.wins }</div>
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
