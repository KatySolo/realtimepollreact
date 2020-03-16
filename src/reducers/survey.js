const initialState = {
    form: 0,
    interest: 0,
    content: 0,
    comment: ''
}

export function surveyReducer(state = initialState, action) {
    switch (action.type) {
        case 'SURVEY/SET_INTEREST':
        return {
            ...state,
            interest: action.payload
        }

        case 'SURVEY/SET_FORM':
        return {
            ...state,
            form: action.payload
        }

        case 'SURVEY/SET_CONTENT':
        return {
            ...state,
            content: action.payload
        }

        case 'SURVEY/SET_COMMENT':
        return {
            ...state,
            comment: action.payload
        }

        default:
            return state;
    }
}