import React from 'react';
import { Router, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import { history } from '../helpers/history';

import '../stylesheets/bootstrap/css/bootstrap.min.css';

function App(props){
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Router history={history}>
                        <PrivateRoute exact path="/" component={HomePage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/register" component={RegisterPage}/>
                    </Router>       
                </div>
            </div>
        </div>
    )
}

export default App;