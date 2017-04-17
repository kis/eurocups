import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/comments';

import { withRouter } from 'react-router-dom';

import Player from '../../components/Player/Player';
import CommentsForm from '../../components/CommentsForm/CommentsForm';
import Comments from '../../components/Comments/Comments';

import './player-container.css';

class PlayerContainer extends Component {
	render() {
		const { team } = this.props;

		return (
			<div className="player-outer">
				<Player {...this.props} />
				<div className="comments-cilinder">
					<CommentsForm {...this.props} />
					<Comments {...this.props} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	team: state.team,
	comments: state.comments
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayerContainer));
