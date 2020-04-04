const initialState = {
	color: 'green'
};

export function appReducer(state = initialState, action) {
	switch (action.type) {
	case 'APP/SET_COLOR':
		return {
			...state,
			color: action.payload
		};

	default:
		return state;
	}
}
