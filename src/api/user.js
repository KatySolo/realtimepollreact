import auth0Client from '../Auth';
import axios from 'axios';

export function getUsersList() {
    return axios.get(process.env.REACT_APP_URL + '/users');
}

export function deleteUser(id) {
    return axios.delete(process.env.REACT_APP_URL + `/user/${id}`);
}

export function createUser(name) {
    return axios.post(process.env.REACT_APP_URL + '/user', {
        name
    }, {
        headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }
    });
}

export function changeName(id, newName) {
    return axios.patch(process.env.REACT_APP_URL + '/user', {
        id,
        name: newName
    });
}