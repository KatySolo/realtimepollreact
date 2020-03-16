import { combineReducers } from 'redux';
import { nameReducer } from './name';
import { surveyReducer } from './survey';
import { sessionReducer } from './session';

export const rootReducer = combineReducers({ 
    user: nameReducer,
    survey: surveyReducer,
    session: sessionReducer
});