import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/teams';

import { withRouter } from 'react-router-dom';

import Options from '../components/Options/Options';
import Groups from '../components/Groups/Groups';
import Teams from '../components/Teams/Teams';
import Standings from '../components/Standings/Standings';

class TeamsContainer extends Component {
	render() {
		const { teams } = this.props;

		return (
			<div>
				<Options {...this.props} />
				{ teams.showTeams || teams.showStandings ? <Groups {...this.props} /> : null }
				{ teams.showTeams ? <Teams  {...this.props} /> : null }
				{ teams.showStandings ? <Standings  {...this.props} /> : null }
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	teams: state.teams
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamsContainer));
