import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { playerAction } from '../actions';

class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            playerId: '',
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
        const { playerId, password } = this.state;
        if(playerId && password){
            this.props.onSubmit(playerId, password);
        }
    }

    onChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        const { playerId, password, submitted } = this.state;
        const { loggingIn } = this.props;

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="playerId">아이디</label>
                        <input type="text" className="form-control" id="playerId" name="playerId" value={playerId} onChange={this.onChange}/>
                        {!playerId && submitted &&
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
                        { loggingIn &&
                        <img alt="로딩중 이미지" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>}
                        <Link to="/register" className="btn btn-link">회원가입</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { loggingIn } = state.authentication;

    return {
        loggingIn
    };
}

function mapDispatchToProps(dispatch){
    return {
        onSubmit: (playerId, password) => dispatch(playerAction.login(playerId, password))
    };
}

LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export default LoginPage;

