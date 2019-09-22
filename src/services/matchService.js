import { apiUrl } from '../config';
import { authHeader } from '../helpers/authHeader';

export const matchService = {
    create,
    findByTeam
};

function create(matchObj, playerInMatches){
    const requestOption = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
            match: matchObj,
            playerInMatches
        })
    }
    return fetch(`${apiUrl}/teams/${matchObj.teamId}/matches`, requestOption)
        .then(handleResponse);
}

function findByTeam(teamId){
    const requestOption = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/teams/${teamId}/matches`, requestOption)
        .then(handleResponse);
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