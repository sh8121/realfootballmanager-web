import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import PlayerListPage from './PlayerListPage';
import helperConstant from '../../constants/helperConstant';

function TeamRoute(props){
    const { match } = props;

    return localStorage.getItem(helperConstant.TEAM_LOGIN_KEY) ?
        (<div>
            <Route exact path={match.url} component={HomePage}/>
            <Route path={`${match.url}/players`} component={PlayerListPage}/>
            <Route path={`${match.url}/matches`} />
        </div>)
        : <Redirect to={{pathname: '/player', state: {from: props.location}}} />; 
}

export default TeamRoute;