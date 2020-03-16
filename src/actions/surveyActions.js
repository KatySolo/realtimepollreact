export function setFormValue (form) {
    return {
        type: 'SURVEY/SET_FORM',
        payload: form,
    }
}

export function setInterestValue (interest) {
    return {
        type: 'SURVEY/SET_INTEREST',
        payload: interest,
    }
}

export function setContentValue (content) {
    return {
        type: 'SURVEY/SET_CONTENT',
        payload: content,
    }
}

export function setComment (comment) {
    return {
        type: 'SURVEY/SET_COMMENT',
        payload: comment,
    }
}