import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Modal from 'react-modal';

import './auth.css';

class AuthModal extends Component {
	constructor(props) {
		super(props);
	}

	getCustomStyles() {
		return {
			overlay: {
				position: 'fixed',
				top: 0,
		    	left: 0,
		    	right: 0,
		    	bottom: 0,
		    	backgroundColor: 'rgba(255, 255, 255, 0.75)'
		  	},
		  	content: {
		  		position: 'relative',
		    	top: '10%',
		    	left: '0px',
		    	right: '0px',
		    	margin: '0 auto',
		    	width: '460px',
		    	border: 'none',
		    	background: '#fff',
		    	overflow: 'auto',
		    	WebkitOverflowScrolling: 'touch',
		    	borderRadius: '4px',
		    	outline: 'none',
		    	padding: '0px',
		    	fontFamily: 'Roboto'
		  	}
		};
	}

	render() {
		let { auth } = this.props;

		return (
		    <Modal
		      	isOpen={this.props.isOpen}
				onAfterOpen={this.props.onAfterOpen}
				onRequestClose={this.props.onRequestClose}
				closeTimeoutMS={20}
				style={this.getCustomStyles()}
				contentLabel={this.props.contentLabel}
		    >
		    	<div className="modal-header">
		    		<a className="close" onClick={this.props.onRequestClose}></a>
		    		<h1 className="modal-header__title">Create a Time Out Account</h1>
		    		<p className="modal-header__subtitle">To review, comment and save the best of London</p>
		    	</div>
		      	<div className="modal-content">
		      		<div className="join-with fb">
		      			<span className="join-text">Join with Facebook</span>
		      			<span className="fb-logo"></span>
		      		</div>
		      		<div className="join-with tw">
		      			<span className="join-text">Join with Twitter</span>
		      			<span className="tw-logo"></span>
		      		</div>
		      		<div className="join-with gg">
		      			<span className="join-text">Join with Google</span>
		      			<span className="gg-logo"></span>
		      		</div>
		      		<div className="join-with em">
		      			<span className="join-text">Join with Email</span>
		      			<span className="em-logo"></span>
		      		</div>
		    	</div>
		    	<div className="modal-footer">
		    		<div>Already have a Time Out account? <span className="log-in">Log In</span></div>
		    	</div>
		    </Modal>
		);
	}
}

export default AuthModal;
