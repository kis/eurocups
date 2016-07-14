import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import TeamsContainer from './TeamsContainer';

class AppContainer extends Component {
  render() {
  	console.log('AppContainer', this.props)

    return (
      <div>
        <TeamsContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);