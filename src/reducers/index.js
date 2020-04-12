import { combineReducers } from 'redux';
import { userInitialState, userReducer } from './user';
import { surveyInitialState, surveyReducer } from './survey';
import { sessionInitialState, sessionReducer } from './session';
import { appReducer } from './app';

export const rootReducer = (state, action) => {
	if (action.type === 'APP/RESET') {
		return {
			...state,
			user: userInitialState,
			survey: surveyInitialState,
			session: sessionInitialState
		};
	}

	return combineReducers({
		app: appReducer,
		user: userReducer,
		survey: surveyReducer,
		session: sessionReducer
	})(state,action);

};
