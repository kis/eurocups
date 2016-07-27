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

  	shouldComponentUpdate() {
  		return false;
  	}

	render() {
		let { team } = this.props;

		let playerName = this.props.routeParams.player;
		playerName = playerName.replace(/[-]/g, ' ');

		let findPlayer = (player) => {
			if (player.name && player.name.toLowerCase()) {
				return player.name.toLowerCase().replace(/[-]/g, ' ') == playerName;
			}
		};

		let player = team.team.find(findPlayer);

		return (
			<div className="player-container">
				<div className="player" style={util.getTeamColor()}>
					<div className="player-group">{player.name}</div>
					<div className="player-group">{player['date of birth']}</div>
					<div className="player-title">{player.club}</div>
					<div className="player-title">{player.position}</div>
					<div className="player-title">{player.number}</div>
					<div className="player-goals clearfix">
						<div>Goals for country</div>
						<div>{player['goals for country']}</div>
					</div>
					<div className="player-caps clearfix">
						<div>Caps</div>
						<div>{player.caps}</div>
					</div>
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
