import { combineReducers } from 'redux';
import { playerReducer } from './playerReducer';
import { teamReducer } from './teamReducer';

export const rootReducer = combineReducers({
    player: playerReducer,
    team: teamReducer
});