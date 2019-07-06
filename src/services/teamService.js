import { apiUrl } from '../config';
import helperConstant from '../constants/helperConstant';
import { teamAuthHeader } from '../helpers/authHeader';

export const teamService = {
    register,
    login,
    logout,
    findPlayers,
    registerPlayer
};

function register(teamId, password, name){
    const requestOption = {
        method: 'POST',
        headers: teamAuthHeader(),
        body: JSON.stringify({
            teamId,
            password,
            name
        })
    };
 
    return fetch(`${apiUrl}/team/register`, requestOption)
        .then(handleResponse);
}

function login(teamId, password){
    const requestOption = {
        method: 'POST',
        headers: teamAuthHeader(),
        body: JSON.stringify({
            teamId,
            password
        })
    };

    return fetch(`${apiUrl}/team/login`, requestOption)
        .then(handleResponse)
        .then((result) => {
            if(result && result.team){
                localStorage.setItem(helperConstant.TEAM_LOGIN_KEY, JSON.stringify(result.team));
                return result;
            }
            return Promise.reject(result);
        });
}

function logout(){
    localStorage.removeItem(helperConstant.TEAM_LOGIN_KEY);
}

function registerPlayer(teamId, playerId, number, position){
    const requestOption = {
        method: 'POST',
        headers: teamAuthHeader(),
        body: JSON.stringify({
            playerId,
            number,
            position
        })
    };

    return fetch(`${apiUrl}/team/${teamId}/players`, requestOption)
        .then(handleResponse)
}

function findPlayers(teamId){
    const requestOption = {
        method: 'GET',
        headers: teamAuthHeader()
    }

    return fetch(`${apiUrl}/team/${teamId}/players`, requestOption)
        .then(handleResponse)
}

function handleResponse(response){
    return response.text().then(
        (text) => {
            const result = text && JSON.parse(text);
            if(!response.ok){
                return Promise.reject(result);
            }
            return result;
        }
    );
}