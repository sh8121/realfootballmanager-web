import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { playerAction } from '../../actions';
import { playerService } from '../../services';
import { history } from '../../helpers/history';

class PlayerListPage extends React.Component{
    constructor(props){
        super(props);
        this.onPlayerEdit = this.onPlayerEdit.bind(this);
        this.onPlayerRemove = this.onPlayerRemove.bind(this);
    }

    onPlayerEdit(player){
        this.props.goToEdit(player);
    }

    onPlayerRemove(player){
        playerService.remove(player.teamId, player.playerId)
            .then((_)=>{
                history.push('/player');
            },
            (_)=>{
            });
    }

    componentDidMount(){
        const { team, findByTeam } = this.props;
        findByTeam(team.teamId);
    }

    render(){
        const { finding, players } = this.props;

        return (
            <div>
                { finding && 
                <img alt="로딩중 이미지" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>}
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">선수아이디</th>
                            <th scope="col">선수이름</th>
                            <th scope="col">번호</th>
                            <th scope="col">포지션</th>
                        </tr>
                    </thead>
                    <tbody>
                        { players && players.length > 0 && players.map((player, index) => (
                            <tr key={`player_${player.playerId}`}>
                                <th scope="row">{index + 1}</th>
                                <td>{player.playerId}</td>
                                <td>{player.name}</td>
                                <td>{player.number}</td>
                                <td>{player.position}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-primary" onClick={()=>this.onPlayerEdit(player)}>편집</button>
                                    <button type="button" className="btn btn-outline-danger" onClick={()=>this.onPlayerRemove(player)}>삭제</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/player/register" className="btn btn-primary">선수 등록</Link>
                <Link to="/" className="btn btn-link">홈으로</Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { team } = state.authentication;
    const { finding, players } = state.player.findByTeam;

    return {
        team,
        finding,
        players   
    };
}

function mapDispatchToProps(dispatch){
    return {
        findByTeam: (teamId) => dispatch(playerAction.findByTeam(teamId)),
        goToEdit: (player) => dispatch(playerAction.goToEdit(player))
    }
}

PlayerListPage = connect(mapStateToProps, mapDispatchToProps)(PlayerListPage);
export default PlayerListPage;