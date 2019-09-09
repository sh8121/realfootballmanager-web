import stateConstant from '../constants/stateConstant';
import helperConstant from '../constants/helperConstant';

const team = JSON.parse(localStorage.getItem(helperConstant.LOGIN_KEY) || '{}');
const initialState = team ? { loggedIn: true, team } : {};
export function rootReducer(state = initialState, action){
    switch(action.type){
        case stateConstant.LOGIN:
            return {...state, loggedIn: true, team: action.team};
        case stateConstant.LOGOUT:
            return {};
        case stateConstant.INIT.PLAYERS:
            return {...state, players: action.players};
        case stateConstant.INIT.MATCHES:
            return {...state, matches: action.matches};
        default:
            return state;
    }
}