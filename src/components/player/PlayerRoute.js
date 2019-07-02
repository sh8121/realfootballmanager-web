import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import helperConstant from '../../constants/helperConstant';

function PlayerRoute(props){
    return localStorage.getItem(helperConstant.PLAYER_LOGIN_KEY) ?
        (<div>
                <Route path="/" component={HomePage}/>
        </div>)
        : <Redirect to={{pathname: '/team', state: {from: props.location }}} />;
}

export default PlayerRoute;