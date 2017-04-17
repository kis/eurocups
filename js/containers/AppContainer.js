import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import * as actions from '../actions/teams';

import Header from '../components/Header/Header';

class AppContainer extends Component {
	render() {
		console.log(this.props)

		return (
			<div>
				<Header {...this.props} />
				{this.props.children}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));