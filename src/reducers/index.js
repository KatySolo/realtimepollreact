import { combineReducers } from 'redux';
import { userReducer } from './user';
import { surveyReducer } from './survey';
import { sessionReducer } from './session';
import { appReducer } from './app';

export const rootReducer = combineReducers({
	app: appReducer,
	user: userReducer,
	survey: surveyReducer,
	session: sessionReducer
});
