import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import helperConstant from '../constants/helperConstant';

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={(props) => {
        return localStorage.getItem(helperConstant.TEAM_LOGIN_KEY) || localStorage.getItem(helperConstant.PLAYER_LOGIN_KEY) ?
            <Component {...props}/> :
            <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    }}/>
}

export default PrivateRoute;
