import playerConstant from '../constants/playerConstant';
import helperConstant from '../constants/helperConstant';

const player = JSON.parse(localStorage.getItem(helperConstant.PLAYER_LOGIN_KEY) || '{}');
const authenticationInitial = player ? { loggedIn: true, player } : {};
const registrationInitial = {};

export function authentication(state = authenticationInitial, action){
    switch(action.type){
        case playerConstant.LOGIN.REQUEST:
            return {
                loggingIn: true
            };
        case playerConstant.LOGIN.SUCCESS:
            return {
                loggedIn: true,
                player: action.player
            };
        case playerConstant.LOGIN.FAILURE:
        case playerConstant.LOGOUT:
            return {};
        default:
            return state;
    }
}

export function registration(state = registrationInitial, action){
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
