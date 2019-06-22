import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import helperConstant from '../constants/helperConstant';

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={(props) => {
        return localStorage.getItem(helperConstant.LOCAL_STORATE_KEY) ?
            <Component {...props}/> :
            <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    }}/>
}

export default PrivateRoute;
