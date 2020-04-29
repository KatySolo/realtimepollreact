import auth0Client from '../Auth';
import axios from 'axios';

export function getSessionsList() {
	return axios.get(process.env.REACT_APP_URL + '/sessions');
}

export function deleteSession(title) {
	return axios.delete(process.env.REACT_APP_URL + `/session/${title}`);
}

export function createSession({ title, lector, start, finish }) {
	return axios.post(process.env.REACT_APP_URL + '/session', {
		title,
		username: lector,
		start,
		finish
	}, {
		headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }
	});
}

export function getCurrentSessions() {
	return axios.get(process.env.REACT_APP_URL + '/current');
}

export function editSession({ id, title, start, finish, lectorId }) {
	return axios.patch(process.env.REACT_APP_URL + '/session', {
		id,
		title,
		start,
		finish,
		lectorId
	});
}
