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

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	render() {
		return ( 
			<div className='standings'>hello world</div>
		);
	}
}

const mapStateToProps = (state) => ({
  standings: state.standings
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Standings);