import React, { Component, PropTypes } from 'react';

import * as util from '../../util/util'; 

import './team.css';

class Team extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    team: PropTypes.object.isRequired
  }

  render() {
    console.log('Team', this.props)

    return (
      <div className="team-container">
        {this.props.team.team ? this.props.team.team.map((result, i) => {
          return <div className="player" style={util.getTeamColor()} key={i}>
            <div className="player-group">{result.name}</div>
            <div className="player-group">{result['date of birth']}</div>
            <div className="player-title">{result.club}</div>
            <div className="player-title">{result.position}</div>
            <div className="player-title">{result.number}</div>
            <div className="player-title">{result['goals for country']}</div>
            <div className="player-title">{result.caps}</div>
            <div className="player-coach clearfix">
              <div>League</div>
              <div>{result.league}</div>
            </div>
            <div className="player-bio">{result.bio}</div>
          </div>
        }) : <div>Loading team...</div>}
      </div>
    );
  }
}

export default Team;
