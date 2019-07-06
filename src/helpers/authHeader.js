import helperConstant from '../constants/helperConstant';

export function teamAuthHeader(){
    const team = JSON.parse(localStorage.getItem(helperConstant.TEAM_LOGIN_KEY));
    
    if(team && team.token){
        return {
            'Authorization': `Bearer ${team.token}`,
            'Content-Type': 'application/json'
        }
    }
    else{
        return {
            'Content-Type': 'application/json'
        }
    }
}

export function playerAuthHeader(){
    const player = JSON.parse(localStorage.getItem(helperConstant.PLAYER_LOGIN_KEY));
    
    if(player && player.token){
        return {
            'Authorization': `Bearer ${player.token}`,
            'Content-Type': 'application/json'
        }
    }
    else{
        return {
            'Content-Type': 'application/json'
        }
    }
}
