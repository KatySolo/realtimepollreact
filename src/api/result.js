import axios from 'axios';

export function postResult({ sessionId, form, content, interest, name, comment }) {
    return axios.post(process.env.REACT_APP_URL + '/results', {
        sessionId,
        form,
        content,
        interest,
        username: name,
        comment
    });
}

export function getResult(id) {
    return axios.get(`${ process.env.REACT_APP_URL }/results?id=${id}`);
}