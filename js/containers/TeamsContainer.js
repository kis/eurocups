import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Groups from '../components/Groups/Groups';
import Teams from '../components/Teams/Teams';

class TeamsContainer extends Component {
  componentWillMount() {
    const { actions } = this.props;
    actions.fetchTeams();
	}

  render() {
    console.log('TeamsContainer', this.props)

    return (
      <div>
        <Groups {...this.props} />
        <Teams {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  teams: state.teams
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(TeamsContainer);
