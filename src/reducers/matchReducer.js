import matchConstant from '../constants/matchConstant'
import { combineReducers } from 'redux';
import { playerUtil } from '../helpers/playerUtil';

const initialNewMatchState = {
    activeFormation: null,
    matchRecord: {
        competitorName: '',
        teamScore: 0,
        competitorScore: 0,
        goal: 0,
        assist: 0,
        shot: 0,
        shotOnTarget: 0,
        shutOff: 0,
        clear: 0,
        block: 0,
        save: 0,
        foul: 0,
        offside: 0,
        yellowCard: 0,
        redCard: 0,
        cornerKick: 0,
        freeKick: 0,
        panaltyKick: 0,
        passMiss: 0,
        controlMiss: 0
    },
    matchHistory: []
};

export const matchReducer = combineReducers({
    newMatch,
    creation
});

function newMatch(state = initialNewMatchState, action){
    let player;
    switch(action.type){
        case matchConstant.INITIALIZE.REQUEST:
            return {
                ...state,
                initializing: true
            };
        case matchConstant.INITIALIZE.SUCCESS:
            const players = action.players;
            for(let player of players){
                player.matchRecord = {
                    goal: 0,
                    assist: 0,
                    shot: 0,
                    shotOnTarget: 0,
                    shutOff: 0,
                    clear: 0,
                    block: 0,
                    save: 0,
                    foul: 0,
                    offside: 0,
                    yellowCard: 0,
                    redCard: 0,
                    cornerKick: 0,
                    freeKick: 0,
                    panaltyKick: 0,
                    passMiss: 0,
                    controlMiss: 0
                };
            }
            return {
                ...state,
                players: action.players,
            }
        case matchConstant.INITIALIZE.FAILURE:
            return state;
        case matchConstant.ACTIVATE_FORMATION:
            state.activeFormation = action.formationNumber;
            return Object.assign({}, state);
        case matchConstant.SET_FORMATION:
            if(!state.activeFormation){
                return state;
            }
            const activePlayer = playerUtil.findPlayerByFormation(state.players, state.activeFormation);
            if(!activePlayer && !action.playerId){
                return state;
            }
            else if(!action.playerId){
                activePlayer.formationNumber = undefined;
            }
            else if(!activePlayer){
                player = playerUtil.findPlayerById(state.players, action.playerId);
                player.formationNumber = state.activeFormation;
            }
            else {
                player = playerUtil.findPlayerById(state.players, action.playerId);
                activePlayer.formationNumber = player.formationNumber;
                player.formationNumber = state.activeFormation;
            }
            return Object.assign({}, state);
        case matchConstant.RECORD:
            if(!action.playerId){
                return state;
            }
            state.matchRecord[action.recordType]++;
            
            player = playerUtil.findPlayerById(state.players, action.playerId);
            player.matchRecord[action.recordType]++;

            state.matchHistory.unshift({playerId: player.playerId, name: player.name, recordType: action.recordType})
            return Object.assign({}, state);
        case matchConstant.RECORD_DELETE:
            state.matchRecord[action.history.recordType]--;
            player = playerUtil.findPlayerById(state.players, action.history.playerId);
            player.matchRecord[action.history.recordType]--;
            state.matchHistory.splice(action.index, 1);
            return Object.assign({}, state);
        default:
            return state;
    }
}

function creation(state = {}, action){
    switch(action.type){
        case matchConstant.CREATE.REQUEST:
            return {
                creating: true
            };
        case matchConstant.CREATE.SUCCESS:
        case matchConstant.CREATE.FAILURE:
            return {};
        default:
            return state;
    }
}