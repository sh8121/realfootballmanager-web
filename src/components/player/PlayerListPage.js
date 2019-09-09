import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { rootAction } from '../../actions';
import { playerService } from '../../services';

class PlayerListPage extends React.Component{
    constructor(props){
        super(props);
        this.onPlayerRemove = this.onPlayerRemove.bind(this);
    }

    onPlayerRemove(player){
        const { team } = this.props;
        playerService.remove(player.teamId, player.playerId)
            .then(result=>{
                alert(result.message);
                this.props.initialize(team);
            },
            result=>{
                alert(result.message);
            });
    }

    render(){
        const { players } = this.props;

        return (
            <div>
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
                                    <Link to={`/player/edit/${player.playerId}`} className="btn btn-outline-primary">편집</Link>
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
    const { team, players } = state;

    return {
        team,
        players   
    };
}

function mapDispatchToProps(dispatch){
    return {
        initialize: (team) => dispatch(rootAction.initialize(team))
    }
}

PlayerListPage = connect(mapStateToProps, mapDispatchToProps)(PlayerListPage);
export default PlayerListPage;