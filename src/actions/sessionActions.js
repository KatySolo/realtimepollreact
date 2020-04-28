export function setSessionParam(title, value) {
	return {
		type: 'SESSION/SET_PARAM',
		payload: { title, value }
	};
}
