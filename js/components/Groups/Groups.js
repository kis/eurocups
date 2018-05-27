import React, { Component } from 'react';
import './groups.css';

export default class Groups extends Component {
	filterByGroup(group) {
		const { actions } = this.props;
		actions.filterTeamsByGroup(group);
	}

	render() {
		const { teams } = this.props;
		return (
		    <div className="teams-groups">
				{teams.groups.map((res, i) => {
					return <div className={teams.activeGroupFilter === res ? "active-group" : null} 
								key={i} 
								onClick={() => this.filterByGroup(res)}>
								{res}
							</div>
				})}
			</div>
		);
	}
}