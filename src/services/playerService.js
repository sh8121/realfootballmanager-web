import { apiUrl } from '../config';
import { authHeader } from '../helpers/authHeader';

export const playerService = {
    register,
    edit,
    remove,
    findByTeam
};

function register(teamId, playerId, name, number, position){
    const requestOption = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
            playerId,
            name,
            number,
            position
        })
    };

    return fetch(`${apiUrl}/teams/${teamId}/players`, requestOption)
        .then(handleResponse);
}

function edit(teamId, playerId, name, number, position){
    const requestOption = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify({
            name,
            number,
            position
        })
    };

    return fetch(`${apiUrl}/teams/${teamId}/players/${playerId}`, requestOption)
        .then(handleResponse);
}

function remove(teamId, playerId){
    const requestOption = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/teams/${teamId}/players/${playerId}`, requestOption)
        .then(handleResponse);
}

function findByTeam(teamId){
    const requestOption = {
        method: 'GET',
        headers: authHeader()
    }

    return fetch(`${apiUrl}/teams/${teamId}/players`, requestOption)
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