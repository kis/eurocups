import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import * as util from '../../util/util';
import './team.css';

export default class Team extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activePlayer: null
		};

		this.style = util.getTeamColor();
	}

	static propTypes = {
		team: PropTypes.object.isRequired
	}

	static contextTypes = {
  		router: PropTypes.object
  	}

	openPlayerView(player) {
		player = player.replace(/\s/g, '-');
		let link = ['/teams', this.props.match.params.team, player.toLowerCase()].join('/');
		this.context.router.history.push(link);
	}

	togglePlayerInfo(i) {
		this.setState({
			activePlayer: this.state.activePlayer != i ? i : null
		});
	}

	render() {
		const { team } = this.props;
		return (
			<div className="team-container">
			{team.team ? team.team.map((result, i) => {
				return <div className="player" 
							style={this.style} 
							key={i} 
							onClick={() => this.togglePlayerInfo(i)}>
					<div>
						<div className="player-header">
							<div className="player-group">{result.name}</div>
							<div className="player-group">{result['date of birth']}</div>
							<div className="player-title">{result.club}</div>
							<div className="player-title">{result.position}</div>
							<div className="player-league">{result.league}</div>
						</div>
						<div className="player-profile-link" onClick={() => this.openPlayerView(result.name)}>Profile</div>
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