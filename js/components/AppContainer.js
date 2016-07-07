import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Standings from '../components/Standings/Standings';

class AppContainer extends Component {
  render() {
    console.log(this.props)
    
    return (
      <div>
        <Standings standings={this.props.standings} actions={this.props.actions} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  standings: state.standings
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);