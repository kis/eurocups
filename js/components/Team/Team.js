import React, { Component, PropTypes } from 'react';

import './team.css';

class Team extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activePlayer: null
		};
	}

	static propTypes = {
		team: PropTypes.object.isRequired
	}

	static contextTypes = {
  		router: React.PropTypes.object
  	}

	openPlayerView(player) {
		player = player.replace(/\s/g, '-');
		let link = ['/teams', this.props.routeParams.team, player.toLowerCase()].join('/');
		this.context.router.push(link);
	}

	togglePlayerInfo(i) {
		this.setState({
			activePlayer: this.state.activePlayer != i ? i : null
		});
	}

	render() {
		return (
			<div className="team-container">
			{this.props.team.team ? this.props.team.team.map((result, i) => {
				return <div className="player" key={i} onClick={this.togglePlayerInfo.bind(this, i)}>
					<div>
						<div className="player-header">
							<div className="player-group">{result.name}</div>
							<div className="player-group">{result['date of birth']}</div>
							<div className="player-title">{result.club}</div>
							<div className="player-title">{result.position}</div>
							<div className="player-league">{result.league}</div>
						</div>
						<div className="player-profile-link" onClick={this.openPlayerView.bind(this, result.name)}> > </div>
					</div>
					<div className={this.state.activePlayer === i ? "player-info active" : "player-info"}>
						{result.number ? <div className="player-number">{result.number}</div> : null}
						<div className="player-goals clearfix">
							<div>Goals for country</div>
							<div>{result['goals for country']}</div>
						</div>
						<div className="player-caps clearfix">
							<div>Caps</div>
							<div>{result.caps}</div>
						</div>
						<div className="player-bio">{result.bio}</div>
					</div>
				</div>
			}) : <div>Loading team...</div>}
			</div>
		);
	}
}

export default Team;
