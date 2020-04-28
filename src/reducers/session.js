export const sessionInitialState = {
	sessions: [],
	sessionId: -1,
	title: '',
	lector:'',
	start: new Date(),
	finish: new Date()
};

export function sessionReducer (state = sessionInitialState, action) {
	switch (action.type) {

	case 'SESSION/SET_PARAM':
		return {
			...state,
			[action.payload.title]: action.payload.value
		};
	default:
		return state;
	}
}
