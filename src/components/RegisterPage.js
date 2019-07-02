import React from 'react';
import PlayerRegisterPage from './player/RegisterPage';
import TeamRegisterPage from './team/RegisterPage';

class RegisterPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            memberType: 0
        };

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
                <h2>회원가입</h2>
                <div className="form-group">
                    <label htmlFor="memberType">회원타입</label> 
                    <select id="memberType" name="memberType" value={memberType} onChange={this.onChange}>
                        <option value={0}>선수</option>
                        <option value={1}>팀</option>
                    </select>
                </div>
                {memberType == 0 ?
                <PlayerRegisterPage/> : <TeamRegisterPage/>}
            </div>
        );
    }
}

export default RegisterPage;