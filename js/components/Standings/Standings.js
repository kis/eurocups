import React, { Component, PropTypes } from 'react';

import './standings.css';

class Standings extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
  	standings: PropTypes.object.isRequired
  }

	render() {
		return (
		    <div className="standings">
					{this.props.standings.map((res, i) => {
						return <div key={i}>{res}</div>
					})}
				</div>
		);
	}
}

export default Standings;
