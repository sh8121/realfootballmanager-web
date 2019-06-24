import playerConstant from '../constants/playerConstant';
import { playerService } from '../services';
import { history } from '../helpers/history';

export const playerAction = {
    register,
    login,
    logout
}

function register(playerId, password, name, gender, bornYear){
    return (dispatch) => {
        dispatch(request());
        playerService.register(playerId, password, name, gender, bornYear)
            .then((_)=>{
                dispatch(success());
                history.push('/');                
            },
            (_)=>{
                dispatch(failure());
            })
    }
    function request(){ return { type: playerConstant.REGISTER.REQUEST } }
    function success(){ return { type: playerConstant.REGISTER.SUCCESS } }
    function failure(){ return { type: playerConstant.REGISTER.FAILURE } }
}

function login(playerId, password){
    return (dispatch) => {
        dispatch(request());
        playerService.login(playerId, password)
            .then((result)=>{
                dispatch(success(result.player));
                history.push('/');
            },
            (_)=>{
                dispatch(failure());
            });  
    }
    function request(){ return { type: playerConstant.LOGIN.REQUEST } }
    function success(player){ return { type: playerConstant.LOGIN.SUCCESS, player } }
    function failure(){ return { type: playerConstant.LOGIN.FAILURE } }
}

function logout(){
    playerService.logout();
    return { type: playerConstant.LOGOUT };
}