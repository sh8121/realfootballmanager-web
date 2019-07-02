import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import PlayerListPage from './PlayerListPage';
import helperConstant from '../../constants/helperConstant';

function TeamRoute(props){
    return localStorage.getItem(helperConstant.TEAM_LOGIN_KEY) ?
        (<div>
            <Route path="/players" component={PlayerListPage}/>
            <Route path="/matches" />
            <Route path="/" component={HomePage}/>
        </div>)
        : <Redirect to={{pathname: '/player', state: {from: props.location}}} />; 
}

export default TeamRoute;