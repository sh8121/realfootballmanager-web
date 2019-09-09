import stateConstant from "../constants/stateConstant";
import { playerService } from '../services';

// export * from './playerAction';
// export * from './teamAction';

export const rootAction = {
    login,
    logout,
    initialize
}

function login(team){
    return {
        type: stateConstant.LOGIN,
        team
    }
}

function logout(){
    return {
        type: stateConstant.LOGOUT
    }
}

function initialize(team){
    return (dispatch) => {
        playerService.findByTeam(team.teamId)
            .then(players=>{
                dispatch({
                    type: stateConstant.INIT.PLAYERS,
                    players,
                });
            });
    }
}