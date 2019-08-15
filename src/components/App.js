import React from 'react';
import { Router, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import { history } from '../helpers/history';

import '../stylesheets/customized.css';
import PlayerRoute from './player/PlayerRoute';
import MatchRecordPage from './match/MatchRecordPage';
import { Navigation } from './common/Navigation';

function App(props){
    return (
        <Router history={history}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <PrivateRoute exact path="/" component={HomePage}/>
                        <PrivateRoute path="/player" component={PlayerRoute}/>
                        <PrivateRoute path="/match" component={MatchRecordPage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/register" component={RegisterPage}/>
                    </div>
                </div>
            </div>
        </Router>  
    )
}

export default App;