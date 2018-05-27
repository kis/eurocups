import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../../history';
import './header.css';

class Header extends Component {
	render() {
		return (
			<div className="header noselect">
				<div className="breadcrumbs">
					<Link className="bc-item" to='/teams'>
						TEAMS
					</Link>
				</div>
			</div>
		);
	}
}

export default Header;
