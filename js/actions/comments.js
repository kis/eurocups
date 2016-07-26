export function saveComment(comment) {
	return {
		type: 'SAVE_COMMENT',
		comment
	}
}

export function getComments() {
	return {
		type: 'GET_COMMENTS'
	}
}