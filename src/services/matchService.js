import { apiUrl } from '../config';
import { authHeader } from '../helpers/authHeader';

export const matchService = {
    create
};

function create(matchObj){
    const requestOption = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(matchObj)
    }
    return fetch(`${apiUrl}/teams/${matchObj.teamId}/matches`, requestOption)
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