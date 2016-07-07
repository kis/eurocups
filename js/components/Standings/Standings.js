import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import * as api from '../../api/api';

import './standings.css';

class Standings extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		api.getTeams();
	}

	componentWillUpdate() {
		console.log(this.props)
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	render() {
		return (
			<div className="teams-container">
				{this.props.standings.teams.map((result, i) => {
					return <div className="team-item" key={i}>
						<div>{result.Group}</div> 
						<div>{result.Team}</div> 
						<div>Coach: {result.Coach}</div>
						<div>Bio: {result.Bio}</div>
						<div>FIFA Ranking: {result['FIFA ranking']}</div>
					</div>
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  standings: state.standings
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Standings);