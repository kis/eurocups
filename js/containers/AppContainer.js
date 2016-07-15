import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class AppContainer extends Component {

	static contextTypes = {
    	router: React.PropTypes.object
  	}

	componentWillMount() {
		this.context.router.push('/teams');
	}

	render() {
	  	return (
	    	<div>
	    		{this.props.children}
	    	</div>
	 	)
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);