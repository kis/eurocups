import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import StandingsContainer from './StandingsContainer';

class AppContainer extends Component {
  render() {
    return (
      <div>
        <StandingsContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
