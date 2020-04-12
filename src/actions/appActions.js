export function setColor (color) {
	return {
		type: 'APP/SET_COLOR',
		payload: color === 'green' || color === 'yellow' ? color : 'green'
	};
}

export function setSection (section) {
	return {
		type: 'APP/ADMIN/SET_SELECTION',
		payload: section
	};
}

export function resetStore () {
	return {
		type: 'APP/RESET'
	};
}
