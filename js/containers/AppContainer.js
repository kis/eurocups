import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import * as actions from '../actions/teams';
import Header from '../components/Header/Header';

class AppContainer extends Component {
	static contextTypes = {
	  	router: PropTypes.object
	}

	componentWillMount() {
		this.context.router.history.push('teams');
	}

	render() {
		return (
			<div>
				<Header {...this.props} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));