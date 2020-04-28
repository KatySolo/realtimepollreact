export const surveyInitialState = {
	form: 1,
	interest: 1,
	content: 1,
	comment: ''
};

export function surveyReducer(state = surveyInitialState, action) {
	switch (action.type) {
	case 'SURVEY/SET_SCORE':
		return {
			...state,
			[action.payload.title]: action.payload.score
		};
	default:
		return state;
	}
}

// TODO initial state now about names and values
