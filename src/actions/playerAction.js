import playerConstant from '../constants/playerConstant';
import { playerService } from '../services';
import { history } from '../helpers/history';

export const playerAction = {
    register,
    findByTeam
}

function register(teamId, playerId, name, number, position){
    return (dispatch) => {
        dispatch(request());
        playerService.register(teamId, playerId, name, number, position)
            .then((_)=>{
                dispatch(success());
                history.push('/player');
            },
            (_)=>{
                dispatch(failure());
            });
    }

    function request(){ return { type: playerConstant.REGISTER.REQUEST } }
    function success(){ return { type: playerConstant.REGISTER.SUCCESS } }
    function failure(){ return { type: playerConstant.REGISTER.FAILURE } }
}

function findByTeam(teamId){
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
    function request(){ return { type: playerConstant.FIND_BY_TEAM.REQUEST } }
    function success(players){ return { type: playerConstant.FIND_BY_TEAM.SUCCESS, players } }
    function failure(){ return { type: playerConstant.FIND_BY_TEAM.FAILURE } }
}