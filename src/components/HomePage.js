import React from 'react';
import { Redirect } from 'react-router-dom';
import helperConstant from '../constants/helperConstant';


let HomePage = (props) => {    
    return localStorage.getItem(helperConstant.PLAYER_LOGIN_KEY) ?
        <Redirect to={{pathname: '/player', state: {from: props.localtion}}}/> : 
        <Redirect to={{pathname: '/team', state: {from: props.location}}}/>
}

export default HomePage;