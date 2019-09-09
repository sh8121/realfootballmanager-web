import React from 'react';
import { Link } from 'react-router-dom';
import { teamService } from '../services';
import { history } from '../helpers/history';

class RegisterPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            teamId: '',
            password: '',
            name: '',
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

        const { teamId, password, name } = this.state;
        if(teamId && password && name){
            teamService.register(teamId, password, name)
                .then(result=>{
                    alert(result.message);
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
        const { teamId, password, name, submitted } = this.state;

        return (
            <div>
                <h2>회원가입</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="teamId">아이디</label>
                        <input type="text" className="form-control" id="teamId" name="teamId" value={teamId} onChange={this.onChange}/>
                        { !teamId && submitted &&
                        <small className="form-text">아이디를 입력해주세요.</small> }
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" className="form-control" id="password" name="password" value={password} onChange={this.onChange}/>
                        { !password && submitted &&
                        <small className="form-text">비밀번호를 입력해주세요.</small> }
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">이름</label>
                        <input type="name" className="form-control" id="name" name="name" value={name} onChange={this.onChange}/>
                        { !name && submitted &&
                        <small className="form-text">이름를 입력해주세요.</small> }
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">가입</button>
                        <Link to="/" className="btn btn-link">취소</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisterPage;