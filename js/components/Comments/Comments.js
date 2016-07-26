import React, { Component, PropTypes } from 'react';

import './comments.css';

class Comments extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props)
		let { comments } = this.props;

		return (
		    <div className="comments-container">
		    	{comments.length ? comments.map((comment, key) => {
		    		return <div key={key} className="comment">{comment}</div>
		    	}) : null}
			</div>
		);
	}
}

export default Comments;
