export const userInitialState = {
	name: ''
};

export function userReducer(state = userInitialState, action) {
	switch (action.type) {
	case 'USER/SET_NAME':
		return {
			...state,
			name: action.payload
		};

	default:
		return state;
	}
}
