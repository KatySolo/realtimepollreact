export function setSessions(sessions) {
    return {
        type: "SESSION/SET_SESSIONS",
        payload: sessions
    }
}

export function setSessionId (id) {
    return {
        type: "SESSION/SET_SESSION_ID",
        payload: id
    }
}