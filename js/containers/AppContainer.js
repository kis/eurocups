import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import * as actions from '../actions/teams';
import Header from '../components/Header/Header';
import history from '../history';

import TeamsContainer from './TeamsContainer';
import TeamContainer from './TeamContainer';
import PlayerContainer from './PlayerContainer/PlayerContainer';

class AppContainer extends Component {
	static contextTypes = {
	  	router: PropTypes.object
	}

	render() {
		return (
			<BrowserRouter basename="/eurocups">
				<div>
					<Header {...this.props} />
					<Route path="/teams" component={TeamsContainer} />
					<Route path="/teams/:team" component={TeamContainer} />
					<Route path="/teams/:team/:player" component={PlayerContainer} />
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => ({
	team: state.team
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);