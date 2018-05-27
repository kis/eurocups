import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { reduxForm } from 'redux-form';
export const fields = [ 'name', 'comment' ];
import './comments-form.css';

class CommentsForm extends Component {
	static propTypes = {
		fields: PropTypes.object.isRequired,
		handleSubmit: PropTypes.func.isRequired,
		resetForm: PropTypes.func.isRequired,
		submitting: PropTypes.bool.isRequired
	}

	submit = (values, dispatch) => {
		return new Promise((resolve, reject) => {
			let { actions } = this.props;
			actions.saveComment(values);
			this.props.resetForm();
			resolve();
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
		    <form className="comments-form" autoComplete="off" onSubmit={handleSubmit(this.submit)}>
		    	<div className="form-input">
	          		<input type="text" autoComplete="off" placeholder="Name" {...name}/>
		      	</div>
		      	<div className="form-input">
	          		<input type="text" autoComplete="off" placeholder="Comment" {...comment}/>
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
