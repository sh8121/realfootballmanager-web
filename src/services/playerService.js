import { apiUrl } from '../config';
import helperConstant from '../constants/helperConstant';

export const playerService = {
    register,
    login,
    logout
};

function register(playerId, password, name, gender, bornYear){
    const requestOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            playerId,
            password,
            name,
            gender,
            bornYear
        })
    };
 
    return fetch(`${apiUrl}/player/register`, requestOption)
        .then(handleResponse);
}

function login(playerId, password){
    const requestOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            playerId,
            password
        })
    };

    return fetch(`${apiUrl}/player/login`, requestOption)
        .then(handleResponse)
        .then((result) => {
            if(result && result.player){
                localStorage.setItem(helperConstant.PLAYER_LOGIN_KEY, JSON.stringify(result.player));
                return result;
            }
            return Promise.reject(result);
        });
}

function logout(){
    localStorage.removeItem(helperConstant.PLAYER_LOGIN_KEY);
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