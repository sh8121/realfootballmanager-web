import memberConstant from '../constants/memberConstant';
import helperConstant from '../constants/helperConstant';

const member = JSON.parse(localStorage.getItem(helperConstant.LOCAL_STORATE_KEY) || '{}');
const authenticationInitial = member ? { loggedIn: true, member } : {};
const registrationInitial = {};

export function authentication(state = authenticationInitial, action){
    switch(action.type){
        case memberConstant.LOGIN.REQUEST:
            return {
                loggingIn: true
            };
        case memberConstant.LOGIN.SUCCESS:
            return {
                loggedIn: true,
                member: action.member
            };
        case memberConstant.LOGIN.FAILURE:
        case memberConstant.LOGOUT:
            return {};
        default:
            return state;
    }
}

export function registration(state = registrationInitial, action){
    switch(action.type){
        case memberConstant.REGISTER.REQUEST:
            return {
                registering: true
            };
        case memberConstant.REGISTER.SUCCESS:
        case memberConstant.REGISTER.FAILURE:
            return {};
        default:
            return state;
    }
}
