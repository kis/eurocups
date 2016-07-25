import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const fields = [ 'firstName', 'lastName' ];

import './comments.css';

class CommentsForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			fields: { firstName, lastName },
			handleSubmit,
			resetForm,
			submitting
		} = this.props;

		return (
		    <form className="comments-form" onSubmit={handleSubmit}>
		    	<div>
		        	<label>First Name</label>
		        	<div>
		          		<input type="text" placeholder="First Name" {...firstName}/>
		        	</div>
		      	</div>
		      	<div>
		        	<label>Last Name</label>
		        	<div>
		          		<input type="text" placeholder="Last Name" {...lastName}/>
		        	</div>
		     	</div>
		      	<div>
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

CommentsForm.propTypes = {
	fields: PropTypes.object.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	resetForm: PropTypes.func.isRequired,
	submitting: PropTypes.bool.isRequired
}

CommentsForm = reduxForm({
	form: 'comments',
	fields
})(CommentsForm);

export default CommentsForm;
