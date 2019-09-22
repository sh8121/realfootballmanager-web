import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import { history } from '../helpers/history';

import '../stylesheets/customized.css';
import PlayerRoute from './player/PlayerRoute';
import MatchRoute from './match/MatchRoute';
import { rootAction } from '../actions';

class App extends React.Component{
    componentDidMount(){
        const { team } = this.props;
        if(team){
            this.props.initializePlayers(team);
            this.props.initializeMatches(team);
        }
    }

    render(){
        return (
            <Router history={history}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <PrivateRoute exact path="/" component={HomePage}/>
                            <PrivateRoute path="/player" component={PlayerRoute}/>
                            <PrivateRoute path="/match" component={MatchRoute}/>
                            <Route path="/login" component={LoginPage}/>
                            <Route path="/register" component={RegisterPage}/>
                        </div>
                    </div>
                </div>
            </Router>  
        )
    }
}

function mapStateToProps(state){
    return {
        team: state.team
    }
}

function mapDispatchToProps(dispatch){
    return {
        initializePlayers: (team) => dispatch(rootAction.initializePlayers(team)),
        initializeMatches: (team) => dispatch(rootAction.initializeMatches(team))
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;