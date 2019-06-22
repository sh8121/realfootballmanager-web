import memberConstant from '../constants/memberConstant';
import { memberService } from '../services';
import { history } from '../helpers/history';

export const memberAction = {
    register,
    login,
    logout
}

function register(memberId, password, name, gender, bornYear){
    return (dispatch) => {
        dispatch(request());
        memberService.register(memberId, password, name, gender, bornYear)
            .then((_)=>{
                dispatch(success());
                history.push('/');                
            },
            (_)=>{
                dispatch(failure());
            })
    }
    function request(){ return { type: memberConstant.REGISTER.REQUEST } }
    function success(){ return { type: memberConstant.REGISTER.SUCCESS } }
    function failure(){ return { type: memberConstant.REGISTER.FAILURE } }
}

function login(memberId, password){
    return (dispatch) => {
        dispatch(request());
        memberService.login(memberId, password)
            .then((result)=>{
                dispatch(success(result.member));
                history.push('/');
            },
            (_)=>{
                dispatch(failure());
            });  
    }
    function request(){ return { type: memberConstant.LOGIN.REQUEST } }
    function success(member){ return { type: memberConstant.LOGIN.SUCCESS, member } }
    function failure(){ return { type: memberConstant.LOGIN.FAILURE } }
}

function logout(){
    memberService.logout();
    return { type: memberConstant.LOGOUT };
}