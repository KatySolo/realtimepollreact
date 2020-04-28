export function setSessionScore(title, score) {
	return {
		type: 'SURVEY/SET_SCORE',
		payload: { title, score }
	};
}
