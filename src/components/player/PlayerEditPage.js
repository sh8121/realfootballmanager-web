import React from 'react';
import { Link } from 'react-router-dom';
import { playerAction } from '../../actions';
import { connect } from 'react-redux';
import { history } from '../../helpers/history';

class PlayerEditPage extends React.Component {
    constructor(props){
        super(props);

        const { playerId, name, number, position } = this.props.player;

        this.state = {
            playerId: playerId,
            name: name,
            number: number,
            position: position    
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        const { playerId, name, number, position } = this.state;
        const { team } = this.props;
        this.props.edit(team.teamId, playerId, name, number, position);
    }

    onChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });        
    }

    render(){
        const { playerId, name, number, position } = this.state;
        const { editing } = this.props;
        const numberArr = [];
        for(let i = 0; i <= 99; i++){
            numberArr.push(i);
        }

        return (
            <div>
                <h2>선수편집</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="playerId">아이디</label>
                        <input type="text" className="form-control" id="playerId" name="playerId" value={playerId} disabled/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">이름</label>
                        <input type="text" className="form-control" id="name" name="name" value={name} disabled/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">번호</label>
                        <select className="form-control" id="number" name="number" value={number} onChange={this.onChange}>
                            {numberArr.map(number=>
                                <option key={`number_${number}`} value={number}>{number}</option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">포지션</label>
                        <select className="form-control" id="position" name="position" value={position} onChange={this.onChange}>
                            <option value={'GK'}>GK</option>
                            <option value={'DF'}>DF</option>
                            <option value={'MF'}>MF</option>
                            <option value={'FW'}>FW</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">선수편집</button>
                        { editing &&
                        <img alt="로딩중 이미지" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>}
                        <Link to="/player" className="btn btn-link">취소</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { team } = state.authentication;
    const { player, editing } = state.player.edit;
    return {
        team,
        player,
        editing
    }
}

function mapDispatchToProps(dispatch){
    return {
        edit: (teamId, playerId, name, number, position) => { dispatch(playerAction.edit(teamId, playerId, name, number, position));}
    }
}

PlayerEditPage = connect(mapStateToProps, mapDispatchToProps)(PlayerEditPage);
export default PlayerEditPage;