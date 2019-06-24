import teamConstant from '../constants/teamConstant';
import helperConstant from '../constants/helperConstant';

const team = JSON.parse(localStorage.getItem(helperConstant.TEAM_LOGIN_KEY) || '{}');
const authenticationInitial = team ? { loggedIn: true, team } : {};
const registrationInitial = {};

export function authentication(state = authenticationInitial, action){
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

export function registration(state = registrationInitial, action){
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
