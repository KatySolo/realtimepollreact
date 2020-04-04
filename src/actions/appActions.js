export function setColor (color) {
	return {
		type: 'APP/SET_COLOR',
		payload: color === 'green' || color === 'yellow' ? color : 'green'
	};
}
