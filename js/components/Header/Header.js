import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../../history';
import './header.css';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: false
		};
	}

  	openBC(i) {
  		let route = '';

  		this.bc.forEach((currBC, j) => {
  			if (i >= j) {
  				route += currBC.route;
  			}
  		});

		this.context.router.history.push(route);
  	}

	render() {
		console.log('qewqwe', this.props);

		this.bc = [{
			bc: 'TEAMS',
			route: '/teams'
		}];

		if (typeof this.props.params === 'object') {
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
		}

		return (
			<div className="header noselect">
				<div className="breadcrumbs">
					<Link className="bc-item" to='/teams'>
						TEAMS
					</Link>
					{ this.bc.map((el, i) => {
						return <span className="bc-item" 
									 onClick={() => this.openBC(i)} 
									 key={i}>{el.bc}
							   </span>
					})}
				</div>
			</div>
		);
	}
}

export default Header;
