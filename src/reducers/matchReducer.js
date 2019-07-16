import matchConstant from '../constants/matchConstant'
import { combineReducer } from 'redux';

export const matchReducer = combineReducer({
    creation
});

function creation(state = {}, action){
    switch(action.type){
        case matchConstant.CREATE.REQUEST:
            return {
                creating: true
            };
        case matchConstant.CREATE.SUCCESS:
        case matchConstant.CREATE.FAILURE:
            return {};
        default:
            return state;
    }
}