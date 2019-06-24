import React from 'react';
import { Route } from 'react-router-dom';

function TeamRoute(props){
    return (
        <div>
            <Route exact path="/"/>
            <Route path="/players"/>
            <Route path="/matches"/>
        </div>
    );
}

export default TeamRoute;