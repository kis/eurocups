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
  		console.log('asdasd', data)
  		return data.map((key, i) => {
  			return <div key={i}>
  				<div>{ key.team }</div>
  			</div>
  		});
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
