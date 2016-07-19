import React, { Component, PropTypes } from 'react';

import './header.css';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	static contextTypes = {
  		router: React.PropTypes.object
  	}

  	handleClick(i) {
  		console.log(this.bc[i])
  	}

	render() {
		this.bc = ['TEAMS'];

		let paramsArr = Object.keys(this.props.params);

		if (paramsArr && paramsArr.length) {
			paramsArr.map((el, i) => {
				console.log(el, this.props.params[el])
				let nextBC = this.props.params[el].toUpperCase();
				this.bc.push(nextBC);
			});
		}

		return (
			<div className="header">
				<div className="breadcrumbs">
					{ this.bc.map((el, i) => {
						return <span className="bc-item" onClick={this.handleClick.bind(this, i)} key={i}>{el}</span>
					})}
				</div>
			</div>
		);
	}
}

export default Header;
