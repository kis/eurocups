import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const fields = [ 'name', 'comment' ];

import './comments-form.css';


class CommentsForm extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		fields: PropTypes.object.isRequired,
		handleSubmit: PropTypes.func.isRequired,
		resetForm: PropTypes.func.isRequired,
		submitting: PropTypes.bool.isRequired
	}

	submit = (values, dispatch) => {
		return new Promise((resolve, reject) => {
	      	/*if (![ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
	        	reject({ username: 'User does not exist', _error: 'Login failed!' })
	      	} else if (values.password !== 'redux-form') {
	        	reject({ password: 'Wrong password', _error: 'Login failed!' })
	      	} else {*/
	      		let { actions } = this.props;
	        	actions.saveComment(values);
	        	this.props.resetForm();
	        	resolve();
	      	// }
	  	});
	}

	render() {
		const {
			fields: { name, comment },
			handleSubmit,
			resetForm,
			submitting
		} = this.props;

		return (
		    <form className="comments-form" autocomplete="off" onSubmit={handleSubmit(this.submit)}>
		    	<div className="form-input">
		        	<label>Name</label>
		        	<div>
		          		<input type="text" autocomplete="off" placeholder="Name" {...name}/>
		        	</div>
		      	</div>
		      	<div className="form-input">
		        	<label>Comment</label>
		        	<div>
		          		<input type="text" autocomplete="off" placeholder="Comment" {...comment}/>
		        	</div>
		     	</div>
		      	<div className="form-btn">
		        	<button type="submit" disabled={submitting}>
		          		{submitting ? <i/> : <i/>} Submit
		        	</button>
		        	<button type="button" disabled={submitting} onClick={resetForm}>
		          		Clear Values
		        	</button>
		      	</div>
		    </form>
		);
	}
}

CommentsForm = reduxForm({
	form: 'comments',
	fields
})(CommentsForm);

export default CommentsForm;
