import teamConstant from '../constants/teamConstant';
import helperConstant from '../constants/helperConstant';
import { combineReducers } from 'redux';

const team = JSON.parse(localStorage.getItem(helperConstant.TEAM_LOGIN_KEY) || '{}');
const authenticationInitial = team ? { loggedIn: true, team } : {};
const registrationInitial = {};
const managementInitial = {};

export const teamReducer = combineReducers({
    authentication,
    registration,
    players
});

function authentication(state = authenticationInitial, action){
    switch(action.type){
        case teamConstant.LOGIN.REQUEST:
            return {
                loggingIn: true
            };
        case teamConstant.LOGIN.SUCCESS:
            return {
                loggedIn: true,
                team: action.team
            };
        case teamConstant.LOGIN.FAILURE:
        case teamConstant.LOGOUT:
            return {};
        default:
            return state;
    }
}

function registration(state = registrationInitial, action){
    switch(action.type){
        case teamConstant.REGISTER.REQUEST:
            return {
                registering: true
            };
        case teamConstant.REGISTER.SUCCESS:
        case teamConstant.REGISTER.FAILURE:
            return {};
        default:
            return state;
    }
}

function players(state = {}, action){
    switch(action.type){
        case teamConstant.REGISTER_PLAYER.REQUEST:
            return Object.assign(state, {
                registering: true
            });
        case teamConstant.REGISTER_PLAYER.SUCCESS:
        case teamConstant.REGISTER_PLAYER.FAILURE:
            return Object.assign(state, {
                registering: false
            });
        case teamConstant.FIND_PLAYERS.REQUEST:
            return Object.assign(state, {
                finding: true
            });
        case teamConstant.FIND_PLAYERS.SUCCESS:
            return Object.assign(state, {
                finding: false,
                players: action.players
            });
        case teamConstant.FIND_PLAYERS.FAILURE:
            return Object.assign(state, {
                finding: false
            });
        default:
            return state;
    }
}


