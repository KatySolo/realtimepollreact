export const surveyInitialState = {
	form: 1,
	interest: 1,
	content: 1,
	comment: ''
};

export function surveyReducer(state = surveyInitialState, action) {
	switch (action.type) {
	case 'SURVEY/SET_INTEREST':
		return {
			...state,
			interest: action.payload
		};

	case 'SURVEY/SET_FORM':
		return {
			...state,
			form: action.payload
		};

	case 'SURVEY/SET_CONTENT':
		return {
			...state,
			content: action.payload
		};

	case 'SURVEY/SET_COMMENT':
		return {
			...state,
			comment: action.payload
		};

	default:
		return state;
	}
}
