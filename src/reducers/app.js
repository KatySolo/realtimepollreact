const initialState = {
	color: 'green',
	section: ''
};

export function appReducer(state = initialState, action) {
	switch (action.type) {
	case 'APP/SET_COLOR':
		return {
			...state,
			color: action.payload
		};
	case 'APP/ADMIN/SET_SELECTION':
		return {
			...state,
			section: action.payload
		};
	default:
		return state;
	}
}
