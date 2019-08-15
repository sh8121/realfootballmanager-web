import { combineReducers } from 'redux';
import { playerReducer } from './playerReducer';
import { matchReducer } from './matchReducer';
import { authentication, registration } from './teamReducer';

export const rootReducer = combineReducers({
    authentication,
    registration,
    player: playerReducer,
    match: matchReducer
});