import { matchService } from '../services/matchService';
import matchConstant from '../constants/matchConstant';

export const matchAction = {
    create
};

function create(matchObj){
    return (dispatch) => {
        dispatch(request());
        matchService.create(matchObj)
            .then((_)=>{
                dispatch(success());
            },
            (_)=>{
                dispatch(failure());
            })
    }

    function request(){ return { type: matchConstant.CREATE.REQUEST }; }
    function success(){ return { type: matchConstant.CREATE.SUCCESS }; }
    function failure(){ return { type: matchConstant.CREATE.FAILURE }; }
}
