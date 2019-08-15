import playerConstant from '../constants/playerConstant';
import { combineReducers } from 'redux';

export const playerReducer = combineReducers({
    registration,
    edit,
    findByTeam
});

function registration(state = {}, action){
    switch(action.type){
        case playerConstant.REGISTER.REQUEST:
            return {
                registering: true
            };
        case playerConstant.REGISTER.SUCCESS:
        case playerConstant.REGISTER.FAILURE:
            return {};
        default:
            return state;
    }
}

function edit(state = {}, action){
    switch(action.type){
        case playerConstant.EDIT.INIT:
            return {
                player: action.player
            };
        case playerConstant.EDIT.REQUEST:
            return {
                editing: true
            };
        case playerConstant.EDIT.SUCCESS:
        case playerConstant.EDIT.FAILURE:
            return {};
        default:
            return state;
    }
}

function findByTeam(state = {}, action){
    switch(action.type){
        case playerConstant.FIND_BY_TEAM.REQUEST:
            return {
                finding: true
            };
        case playerConstant.FIND_BY_TEAM.SUCCESS:
            return {
                players: action.players
            }
        case playerConstant.FIND_BY_TEAM.FAILURE:
            return {};
        default:
            return state;
    }
}
