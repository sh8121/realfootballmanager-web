import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { rootAction } from '../actions';
import { teamService } from '../services';
import { history } from '../helpers/history';

class LoginPage extends React.Component {
    constructor(props){
        super(props);

        teamService.logout();
        this.props.logout();

        this.state = {
            teamId: '',
            password: '',
            submitted: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({
            submitted: true
        });
        const { teamId, password } = this.state;
        if(teamId && password){
            teamService.login(teamId, password)
                .then(result=>{
                    this.props.login(result.team);
                    alert(result.message);
                    this.props.initializePlayers(result.team);
                    this.props.initializeMatches(result.team);
                    history.push('/');
                },
                result=>{
                    alert(result.message);
                });
        }
    }

    onChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        const { teamId, password, submitted } = this.state;

        return (
            <div>
                <h2>로그인</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="teamId">아이디</label>
                        <input type="text" className="form-control" id="teamId" name="teamId" value={teamId} onChange={this.onChange}/>
                        {!teamId && submitted &&
                            <small className="form-text">아이디를 입력해주세요.</small>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" className="form-control" id="password" name="password" value={password} onChange={this.onChange}/>
                        {!password && submitted &&
                            <small className="form-text">비밀번호를 입력해주세요.</small>
                        }
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">로그인</button>
                        <Link to="/register" className="btn btn-link">회원가입</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        login: (team) => dispatch(rootAction.login(team)),
        logout: () => dispatch(rootAction.logout()),
        initializePlayers: (team) => dispatch(rootAction.initializePlayers(team)),
        initializeMatches: (team) => dispatch(rootAction.initializeMatches(team))
    };
}

LoginPage = connect(null, mapDispatchToProps)(LoginPage);
export default LoginPage;
