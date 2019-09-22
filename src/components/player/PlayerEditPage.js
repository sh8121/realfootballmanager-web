import React from 'react';
import { Link } from 'react-router-dom';
import { rootAction } from '../../actions';
import { connect } from 'react-redux';
import { history } from '../../helpers/history';
import { playerUtil } from '../../helpers/playerUtil';
import { playerService } from '../../services';

class PlayerEditPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            playerId: '',
            name: '',
            number: 0,
            position: 'GK'
        }

        this.syncPlayer = this.syncPlayer.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        this.syncPlayer();
    }

    componentDidUpdate(){
        this.syncPlayer();
    }

    syncPlayer(){
        if(this.props.players && !this.state.playerId){
            const player = playerUtil.findPlayerById(this.props.players, this.props.match.params.id);
            this.setState({
                playerId: player.playerId,
                name: player.name,
                number: player.number,
                position: player.position
            });
        }
    }

    onSubmit(e){
        e.preventDefault();
        const { playerId, name, number, position } = this.state;
        const { team } = this.props;
        playerService.edit(team.teamId, playerId, name, number, position)
            .then(result=>{
                alert(result.message);
                this.props.initializePlayers(team);
                history.push('/player');
            },
            result=>{
                alert(result.message);
            });
    }

    onChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });        
    }

    render(){
        const { playerId, name, number, position } = this.state;
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
                        <Link to="/player" className="btn btn-link">취소</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { team, players } = state;
    return {
        team,
        players
    }
}

function mapDispatchToProps(dispatch){
    return {
        initializePlayers: (team) => dispatch(rootAction.initializePlayers(team))
    }
}

PlayerEditPage = connect(mapStateToProps, mapDispatchToProps)(PlayerEditPage);
export default PlayerEditPage;