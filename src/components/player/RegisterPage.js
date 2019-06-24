import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { playerAction } from '../actions'

class RegisterPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            playerId: '',
            password: '',
            name: '',
            gender: 0,
            bornYear: 1990,
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

        const { playerId, password, name, gender, bornYear } = this.state;
        if(playerId && password && name){
            this.props.onSubmit(playerId, password, name, gender, bornYear);
        }
    }

    onChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });        
    }      

    render(){
        const { playerId, password, name, gender, bornYear, submitted } = this.state;
        const { registering } = this.props;
        const bornYearArr = [];
        for(let i = 1960; i <= 2000; i++){
            bornYearArr.push(i);
        }

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="playerId">아이디</label>
                        <input type="text" className="form-control" id="playerId" name="playerId" value={playerId} onChange={this.onChange}/>
                        { !playerId && submitted &&
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
                        <label htmlFor="gender">성별</label>
                        <select id="gender" name="gender" value={gender} onChange={this.onChange}>
                            <option value={0}>남자</option>
                            <option value={1}>여자</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bornYear">생년</label>
                        <select id="bornYear" name="bornYear" value={bornYear} onChange={this.onChange}>
                            {bornYearArr.map(year => (
                                <option value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">가입</button>
                        { registering &&
                        <img alt="로딩중 이미지" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>}
                        <Link to="/" className="btn btn-link">취소</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { registering } = state.registration;
    return {
        registering
    }
}

function mapDispatchToProps(dispatch){
    return {
        onSubmit: (playerId, password, name, gender, bornYear) => dispatch(playerAction.register(playerId, password, name, gender, bornYear))
    }
}

RegisterPage = connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
export default RegisterPage;