import { apiUrl } from '../config';
import helperConstant from '../constants/helperConstant';
import { authHeader } from '../helpers/authHeader';

export const teamService = {
    register,
    login,
    logout
};

function register(teamId, password, name){
    const requestOption = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
            teamId,
            password,
            name
        })
    };
 
    return fetch(`${apiUrl}/register`, requestOption)
        .then(handleResponse);
}

function login(teamId, password){
    const requestOption = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
            teamId,
            password
        })
    };

    return fetch(`${apiUrl}/login`, requestOption)
        .then(handleResponse)
        .then((result) => {
            if(result && result.team){
                localStorage.setItem(helperConstant.LOGIN_KEY, JSON.stringify(result.team));
                return result;
            }
            return Promise.reject(result);
        });
}

function logout(){
    localStorage.removeItem(helperConstant.LOGIN_KEY);
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