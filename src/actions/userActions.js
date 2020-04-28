export function setUserParam (title, value) {
	return {
		type: 'USER/SET_PARAM',
		payload: { title, value },
	};
}
