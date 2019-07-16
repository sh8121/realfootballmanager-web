import teamConstant from '../constants/teamConstant';
import { teamService } from '../services';
import { history } from '../helpers/history';

export const teamAction = {
    register,
    login,
    logout
}

function register(teamId, password, name){
    return (dispatch) => {
        dispatch(request());
        teamService.register(teamId, password, name)
            .then((_)=>{
                dispatch(success());
                history.push('/');                
            },
            (_)=>{
                dispatch(failure());
            })
    }
    function request(){ return { type: teamConstant.REGISTER.REQUEST } }
    function success(){ return { type: teamConstant.REGISTER.SUCCESS } }
    function failure(){ return { type: teamConstant.REGISTER.FAILURE } }
}

function login(teamId, password){
    return (dispatch) => {
        dispatch(request());
        teamService.login(teamId, password)
            .then((result)=>{
                dispatch(success(result.team));
                history.push('/');
            },
            (_)=>{
                dispatch(failure());
            });  
    }
    function request(){ return { type: teamConstant.LOGIN.REQUEST } }
    function success(team){ return { type: teamConstant.LOGIN.SUCCESS, team } }
    function failure(){ return { type: teamConstant.LOGIN.FAILURE } }
}

function logout(){
    teamService.logout();
    return { type: teamConstant.LOGOUT };
}