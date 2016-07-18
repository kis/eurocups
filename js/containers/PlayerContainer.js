import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/teams';

import Player from '../components/Player/Player';

class PlayerContainer extends Component {
	render() {
		const { team } = this.props;

		return (
			<div>
				<Player {...this.props} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	team: state.team
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
