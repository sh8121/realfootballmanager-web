import stateConstant from "../constants/stateConstant";
import { playerService } from '../services';
import { matchService } from "../services/matchService";

// export * from './playerAction';
// export * from './teamAction';

export const rootAction = {
    login,
    logout,
    initializePlayers,
    initializeMatches
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

function initializePlayers(team){
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

function initializeMatches(team){
    return (dispatch) => {
        matchService.findByTeam(team.teamId)
            .then(matches=>{
                dispatch({
                    type: stateConstant.INIT.MATCHES,
                    matches
                });
            });
    }
}