import React, { Component, PropTypes } from 'react';

import './team.css';

const propTypes = {
  team: PropTypes.object.isRequired
};

class Team extends Component {
  constructor(props) {
    super(props);
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

Team.propTypes = propTypes;

export default Team;
