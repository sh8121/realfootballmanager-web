import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import helperConstants from '../constants/helperConstants';

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={(props) => {
        return localStorage.getItem(helperConstants.LOCAL_STORATE_KEY) ?
            <Component {...props}/> :
            <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    }}/>
}

export default PrivateRoute;
