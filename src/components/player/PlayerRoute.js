import React from 'react';
import { Route } from 'react-router-dom';
import PlayerListPage from './PlayerListPage';
import PlayerRegisterPage from './PlayerRegisterPage';

function PlayerRoute(props){
    const { match } = props;

    return (
        <div>
            <Route exact path={match.url} component={PlayerListPage}/>
            <Route path={`${match.url}/register`} component={PlayerRegisterPage}/>
        </div>
    );
}

export default PlayerRoute;