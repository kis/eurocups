var initComments = {
	comments: null
};

export default function comments(state = initComments, action) {
	switch (action.type) {
	case 'GET_COMMENTS':
		return {...state};

	case 'SAVE_COMMENT':
		console.log('aaa', action.comment)
		return {...state, comments: action.comment};

	default:
		return {...state};
	}
}