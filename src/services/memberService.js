import { apiUrl } from '../config';
import helperConstant from '../constants/helperConstant';

export const memberService = {
    register,
    login,
    logout
};

function register(memberId, password, name, gender, bornYear){
    const requestOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            memberId,
            password,
            name,
            gender,
            bornYear
        })
    };
 
    return fetch(`${apiUrl}/member/register`, requestOption)
        .then(handleResponse);
}

function login(memberId, password){
    const requestOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            memberId,
            password
        })
    };

    return fetch(`${apiUrl}/member/login`, requestOption)
        .then(handleResponse)
        .then((result) => {
            if(result && result.member){
                localStorage.setItem(helperConstant.LOCAL_STORATE_KEY, JSON.stringify(result.member));
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