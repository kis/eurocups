import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import * as actions from '../../actions/comments';

export const fields = [ 'name', 'comment' ];

import './comments-form.css';


const submit = (values, dispatch) => {
	return new Promise((resolve, reject) => {
      	/*if (![ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
        	reject({ username: 'User does not exist', _error: 'Login failed!' })
      	} else if (values.password !== 'redux-form') {
        	reject({ password: 'Wrong password', _error: 'Login failed!' })
      	} else {*/
      		console.log(values)
        	actions.saveComment(values);
        	resolve();
      	// }
  	});
}


class CommentsForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			fields: { name, comment },
			handleSubmit,
			resetForm,
			submitting
		} = this.props;

		return (
		    <form className="comments-form" onSubmit={handleSubmit(submit)}>
		    	<div>
		        	<label>Name</label>
		        	<div>
		          		<input type="text" placeholder="Name" {...name}/>
		        	</div>
		      	</div>
		      	<div>
		        	<label>Comment</label>
		        	<div>
		          		<input type="text" placeholder="Comment" {...comment}/>
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
