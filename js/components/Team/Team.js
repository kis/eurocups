import React, { Component, PropTypes } from 'react';

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
        asdasd
      </div>
    );
  }
}

export default Team;
