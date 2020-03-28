export function setUsername (name) {
	return {
		type: 'USER/SET_NAME',
		payload: name,
	};
}