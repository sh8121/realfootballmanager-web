import { apiUrl } from '../config';
import helperConstant from '../constants/helperConstant';

export const teamService = {
    register,
    login,
    logout
};

function register(teamId, password, name){
    const requestOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            teamId,
            password
        })
    };

    return fetch(`${apiUrl}/team/login`, requestOption)
        .then(handleResponse)
        .then((result) => {
            if(result && result.team){
                localStorage.setItem(helperConstant.LOCAL_STORATE_KEY, JSON.stringify(result.team));
                return result;
            }
            return Promise.reject(result);
        });
}

function logout(){
    localStorage.removeItem(helperConstant.LOCAL_STORATE_KEY);
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