const initialState = {
	sessions: [],
	sessionId: -1,
	title: '',
	username:'',
	start: new Date(),
	finish: new Date()
};

export function sessionReducer (state = initialState, action) {
	switch (action.type) {
	case 'SESSION/SET_SESSIONS':
		return {
			...state,
			sessions: action.payload
		};

	case 'SESSION/SET_SESSION_ID':
		return {
			...state,
			sessionId: action.payload
		};
	case 'SESSION/ADD/SET_TITLE':
		return {
			...state,
			title: action.payload
		};

	case 'SESSION/ADD/SET_USERNAME':
		return {
			...state,
			username: action.payload
		};

	case 'SESSION/ADD/SET_START':
		return {
			...state,
			start: action.payload
		};

	case 'SESSION/ADD/SET_FINISH':
		return {
			...state,
			finish: action.payload
		};
	default:
		return state;
	}
}
