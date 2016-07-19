import React, { Component, PropTypes } from 'react';

import './header.css';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	static contextTypes = {
  		router: React.PropTypes.object
  	}

  	openBC(i) {
  		let route = '';

  		this.bc.forEach((currBC, j) => {
  			if (i >= j) {
  				route += currBC.route;
  			}
  		});

  		this.context.router.push(route);
  	}

	render() {
		this.bc = [{
			bc: 'TEAMS',
			route: '/teams'
		}];

		let paramsArr = Object.keys(this.props.params);

		if (paramsArr && paramsArr.length) {
			paramsArr.map(el => {
				let nextBC = this.props.params[el];
				this.bc.push({
					bc: nextBC.toUpperCase(),
					route: '/' + nextBC
				});
			});
		}

		return (
			<div className="header">
				<div className="breadcrumbs">
					{ this.bc.map((el, i) => {
						return <span className="bc-item" onClick={this.openBC.bind(this, i)} key={i}>{el.bc}</span>
					})}
				</div>
			</div>
		);
	}
}

export default Header;
