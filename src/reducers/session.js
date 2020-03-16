const initialState = {
    sessions: [],
    sessionId: -1
}

export function sessionReducer (state = initialState, action) {
    switch (action.type) {
        case 'SESSION/SET_SESSIONS':
            return {
                ...state,
                sessions: action.payload
            }
        
        case 'SESSION/SET_SESSION_ID': 
            return {
                ...state,
                sessionId: action.payload
            }
            
        default:
            return state;
    }
}