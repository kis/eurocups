import React, { Component, PropTypes } from 'react';

import './standings.css';

class Standings extends Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	render() {
		return (
			<div className="teams-container">
				{this.props.standings.teams ? this.props.standings.teams.map((result, i) => {
					return <div className="team-item" key={i}>
						<div>{result.Group}</div>
						<div>{result.Team}</div>
						<div>Coach: {result.Coach}</div>
						<div>Bio: {result.Bio}</div>
						<div>FIFA Ranking: {result['FIFA ranking']}</div>
					</div>
				}) : null}
			</div>
		);
	}
}

export default Standings;
