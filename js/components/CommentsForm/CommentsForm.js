import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
export const fields = [ 'name', 'comment' ];
import './comments-form.css';

class CommentsForm extends Component {
	submit = (values, dispatch) => {
		return new Promise((resolve, reject) => {
			let { actions } = this.props;
			actions.saveComment(values);
			this.props.reset();
			resolve();
	  	});
	}

	renderField = ({ input, label, type, meta: { touched, error } }) => (
		<div className="form-input">
			<input {...input} type={type} autoComplete="off" placeholder={label} />
			{touched && error && <span>{error}</span>}
		</div>
	)

	render() {
		const {
			fields: { name, comment },
			handleSubmit,
			reset,
			submitting
		} = this.props;

		return (
		    <form className="comments-form" autoComplete="off" onSubmit={handleSubmit(this.submit)}>
	          	<Field type="text" name="name" label="Name" component={this.renderField} />
	          	<Field type="text" name="comment" label="Comment" component={this.renderField} />
		      	<div className="form-btn">
		        	<button type="submit" disabled={submitting}>
		          		{submitting ? <i/> : <i/>} Submit
		        	</button>
		        	<button type="button" disabled={submitting} onClick={reset}>
		          		Clear Values
		        	</button>
		      	</div>
		    </form>
		);
	}
}

export default reduxForm({
	form: 'comments',
	fields
})(CommentsForm);