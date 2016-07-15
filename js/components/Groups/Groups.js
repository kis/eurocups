import React, { Component, PropTypes } from 'react';

import './groups.css';

class Groups extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
  		teams: PropTypes.object.isRequired
  	}

	filterByGroup(group) {
		const { actions } = this.props;
		actions.filterTeamsByGroup(group);
	}

	render() {
		return (
		    <div className="teams-groups">
				{this.props.teams.groups.map((res, i) => {
					return <div className={this.props.teams.activeGroupFilter === res ? "active-group" : null} key={i} onClick={this.filterByGroup.bind(this, res)}>{res}</div>
				})}
			</div>
		);
	}
}

export default Groups;
