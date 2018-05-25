import React, { Component } from 'react';
import AuthModal from '../AuthModal/AuthModal';

import './header.css';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: false
		};

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	isOpen() {
		return this.state.modalIsOpen;
	}

	openModal() {
		this.setState({modalIsOpen: true});
	}

	requestCloseFn() {
		this.setState({modalIsOpen: false});
	}

	afterOpenModal() {
		// references are now sync'd and can be accessed.
	    // this.refs.subtitle.style.color = '#f00';
	}

	closeModal() {
	    this.setState({modalIsOpen: false});
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
		this.bc = [{
			bc: 'TEAMS',
			route: '/teams'
		}];

		if (!this.props.params) return null;
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
			<div className="header noselect">
				<div className="breadcrumbs">
					<span className="bc-item" onClick={this.openModal}>LOGIN</span>
					<AuthModal
						isOpen={this.isOpen()}
						onAfterOpen={this.afterOpenModal()}
						onRequestClose={this.requestCloseFn.bind(this)}
						closeTimeoutMS={20}
						contentLabel="Modal"
					/>
					{ this.bc.map((el, i) => {
						return <span className="bc-item" onClick={this.openBC.bind(this, i)} key={i}>{el.bc}</span>
					})}
				</div>
			</div>
		);
	}
}

export default Header;
