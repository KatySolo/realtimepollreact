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

export function setSessionName (title) {
    return {
        type: 'SESSION/ADD/SET_TITLE',
        payload: title
    }
}

export function setSessionLector (username) {
    return {
        type: 'SESSION/ADD/SET_USERNAME',
        payload: username
    }
}

export function setSessionStart (start) {
    return {
        type: 'SESSION/ADD/SET_START',
        payload: start
    }
}

export function setSessionFinish(finish) {
    return {
        type: 'SESSION/ADD/SET_FINISH',
        payload: finish
    }
}
