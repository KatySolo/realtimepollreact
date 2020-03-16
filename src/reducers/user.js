const initialState = {
    name: ''
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'USER/SET_NAME':
            return {
                ...state,
                name: action.payload
            }

        default:
            return state;    
    }
}