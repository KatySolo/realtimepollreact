export const userInitialState = {
	name: ''
};

export function userReducer(state = userInitialState, action) {
	switch (action.type) {
	case 'USER/SET_PARAM':
		return {
			...state,
			[action.payload.title]: action.payload.value
		};

	default:
		return state;
	}
}
