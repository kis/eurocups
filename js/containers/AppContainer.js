import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

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
		);
	}
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(AppContainer);