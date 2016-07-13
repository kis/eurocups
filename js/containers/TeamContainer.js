import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Team from '../components/Team/Team';

class TeamContainer extends Component {
  componentWillMount() {
    console.log('will mount team')

    const { actions } = this.props;
    actions.fetchTeam();
	}

  render() {
    // <Team {...this.props}

    return (
      <div>
        <Team team={this.props.team} actions={this.props.actions} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  team: state.team
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(TeamContainer);