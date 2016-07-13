import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Teams from '../components/Teams/Teams';

class TeamsContainer extends Component {
  componentWillMount() {
    const { actions } = this.props;
    actions.fetchTeams();
	}

  render() {
    // <Teams {...this.props}

    return (
      <div>
        <Teams teams={this.props.teams} actions={this.props.actions} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  teams: state.teams
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(TeamsContainer);