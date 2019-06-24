import React from 'react';
import TeamLoginPage from './team/LoginPage';
import PlayerLoginPage from './player/LoginPage';

class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            memberType: 0
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        const { memberType } = this.state;

        return (
            <div>
                <h2>로그인</h2>
                <div className="form-group">
                    <label htmlFor="memberType">회원타입</label> 
                    <select name="memberType" id="memberType" value={memberType} onChange={this.onChange}>
                        <option value={0}>팀</option>
                        <option value={1}>선수</option>
                    </select>
                </div>
                {memberType === 0 ?
                <TeamLoginPage/> : <PlayerLoginPage/>} 
            </div>
        );
    }
}

export default LoginPage;

