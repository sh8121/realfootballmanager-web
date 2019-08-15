import { matchService } from '../services/matchService';
import { playerService } from '../services/playerService';
import matchConstant from '../constants/matchConstant';

export const matchAction = {
    initialize,
    activateFormation,
    setFormation,
    record,
    recordDelete,
    create
};

function initialize(teamId){
    return (dispatch) => {
        dispatch(request());
        playerService.findByTeam(teamId)
            .then(players=>{
                dispatch(success(players));
            },
            _=>{
                dispatch(failure());
            });
    }

    function request(){ return { type: matchConstant.INITIALIZE.REQUEST }; }
    function success(players){ return { type: matchConstant.INITIALIZE.SUCCESS, players }; }
    function failure(){ return { type: matchConstant.INITIALIZE.FAILURE }; }
}

function activateFormation(formationNumber){
    return {
        type: matchConstant.ACTIVATE_FORMATION,
        formationNumber
    };
}

function setFormation(playerId){
    return {
        type: matchConstant.SET_FORMATION,
        playerId
    };
}

function record(recordType, playerId){
    return {
        type: matchConstant.RECORD,
        recordType,
        playerId
    };
}

function recordDelete(history, index){
    return {
        type: matchConstant.RECORD_DELETE,
        history,
        index
    }
}

function create(matchObj){
    return (dispatch) => {
        dispatch(request());
        matchService.create(matchObj)
            .then((_)=>{
                dispatch(success());
            },
            (_)=>{
                dispatch(failure());
            })
    }

    function request(){ return { type: matchConstant.CREATE.REQUEST }; }
    function success(){ return { type: matchConstant.CREATE.SUCCESS }; }
    function failure(){ return { type: matchConstant.CREATE.FAILURE }; }
}
