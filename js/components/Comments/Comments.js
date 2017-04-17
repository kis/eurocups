import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './comments.css';

class Comments extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { comments } = this.props;

		return (
		    <div className="comments-container">
		    	{comments.comments && comments.comments.length ? comments.comments.map((comment, key) => {
		    		return <div key={key} className="comment">
		    			<div>{comment.name}</div>
		    			<div>{comment.comment}</div>
		    		</div>
		    	}) : null}
			</div>
		);
	}
}

export default Comments;
