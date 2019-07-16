import helperConstant from '../constants/helperConstant';

export function authHeader(){
    const team = JSON.parse(localStorage.getItem(helperConstant.LOGIN_KEY));
    
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