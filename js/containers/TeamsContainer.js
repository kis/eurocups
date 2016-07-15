import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Options from '../components/Options/Options';
import Groups from '../components/Groups/Groups';
import Teams from '../components/Teams/Teams';
import Standings from '../components/Standings/Standings';

class TeamsContainer extends Component {
  render() {
    console.log('TeamsContainer', this.props)

    return (
      <div>
        <Options {...this.props} />
        <Groups {...this.props} />
        { this.props.teams.showTeams ? <Teams  {...this.props} /> : null }
        { this.props.teams.showStandings ? <Standings  {...this.props} /> : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  teams: state.teams
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(TeamsContainer);
