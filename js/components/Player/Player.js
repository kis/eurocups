import React, { Component, PropTypes } from 'react';

import * as util from '../../util/util';

import './player.css';

class Player extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		team: PropTypes.object.isRequired
	}

	static contextTypes = {
  	router: React.PropTypes.object
  }

	render() {
		let { team } = this.props;

		let playerName = this.props.routeParams.player;
		playerName = playerName.replace('-', ' ');

		let findPlayer = (player) => {
			return player.name.toLowerCase() == playerName;
		};

		let player = team.team.find(findPlayer);

		return (
			<div className="container">
				<div className="player" style={util.getTeamColor()}>
					<div className="player-group">{player.name}</div>
					<div className="player-group">{player['date of birth']}</div>
					<div className="player-title">{player.club}</div>
					<div className="player-title">{player.position}</div>
					<div className="player-title">{player.number}</div>
					<div className="player-title">{player['goals for country']}</div>
					<div className="player-title">{player.caps}</div>
					<div className="player-coach clearfix">
						<div>League</div>
						<div>{player.league}</div>
					</div>
					<div className="player-bio">{player.bio}</div>
				</div>
			</div>
		);
	}
}

export default Player;
