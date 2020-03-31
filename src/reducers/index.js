import { combineReducers } from 'redux';
import { userReducer } from './user';
import { surveyReducer } from './survey';
import { sessionReducer } from './session';

export const rootReducer = combineReducers({ 
	user: userReducer,
	survey: surveyReducer,
	session: sessionReducer
});