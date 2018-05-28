var initComments = {
	comments: []
};

export default function comments(state = initComments, action) {
	switch (action.type) {
	case 'SAVE_COMMENT':
		return {...state, comments: [action.comment, ...state.comments]};

	default:
		return {...state};
	}
}