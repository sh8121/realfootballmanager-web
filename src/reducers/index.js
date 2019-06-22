import { combineReducers } from 'redux';
import { authentication, registration } from './memberReducer';

export const rootReducer = combineReducers({
    authentication,
    registration
});