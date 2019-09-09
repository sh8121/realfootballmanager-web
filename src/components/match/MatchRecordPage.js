import React from 'react';
import { connect } from 'react-redux';
import { Field } from './partial/Field';
import RecordBoard from './partial/RecordBoard';
import RecordHistory from './partial/RecordHistory';
import { playerUtil } from '../../helpers/playerUtil';

class MatchRecordPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            activeFormation: null,
            matchRecord: {
                competitorName: '',
                teamScore: 0,
                competitorScore: 0,
                goal: 0,
                assist: 0,
                shot: 0,
                shotOnTarget: 0,
                shutOff: 0,
                clear: 0,
                block: 0,
                save: 0,
                foul: 0,
                offside: 0,
                yellowCard: 0,
                redCard: 0,
                cornerKick: 0,
                freeKick: 0,
                panaltyKick: 0,
                passMiss: 0,
                controlMiss: 0
            },
            matchHistory: []
        }

        this.syncPlayers = this.syncPlayers.bind(this);
        this.activateFormation = this.activateFormation.bind(this);
        this.setFormation = this.setFormation.bind(this);
        this.record = this.record.bind(this);
        this.recordDelete = this.recordDelete.bind(this);
    }

    componentDidMount(){
        this.syncPlayers();
    }

    componentDidUpdate(){
        this.syncPlayers();
    }

    syncPlayers(){
        if(this.props.players && !this.state.players){
            const players = JSON.parse(JSON.stringify(this.props.players));
            for(let player of players){
                player.matchRecord = {
                    goal: 0,
                    assist: 0,
                    shot: 0,
                    shotOnTarget: 0,
                    shutOff: 0,
                    clear: 0,
                    block: 0,
                    save: 0,
                    foul: 0,
                    offside: 0,
                    yellowCard: 0,
                    redCard: 0,
                    cornerKick: 0,
                    freeKick: 0,
                    panaltyKick: 0,
                    passMiss: 0,
                    controlMiss: 0
                };
            }
            this.setState({
                players
            });
        }
    }

    activateFormation(formationNumber){
        this.setState({
            activeFormation: formationNumber
        });
    }

    setFormation(playerId){
        if(!this.state.activeFormation){
            return;
        }
        let player;
        const activePlayer = playerUtil.findPlayerByFormation(this.state.players, this.state.activeFormation);
        if(!activePlayer && !playerId){
            return;
        }
        else if(!playerId){
            activePlayer.formationNumber = undefined;
        }
        else if(!activePlayer){
            player = playerUtil.findPlayerById(this.state.players, playerId);
            player.formationNumber = this.state.activeFormation;
        }
        else {
            player = playerUtil.findPlayerById(this.state.players, playerId);
            activePlayer.formationNumber = player.formationNumber;
            player.formationNumber = this.state.activeFormation;
        }
        this.setState(this.state);
    }

    record(recordType, playerId){
        if(!playerId){
            return;
        }
        this.state.matchRecord[recordType]++;
        
        const player = playerUtil.findPlayerById(this.state.players, playerId);
        player.matchRecord[recordType]++;

        this.state.matchHistory.unshift({playerId: player.playerId, name: player.name, recordType: recordType})
        this.setState(this.state);
    }

    recordDelete(history, index){
        this.state.matchRecord[history.recordType]--;
        const player = playerUtil.findPlayerById(this.state.players, history.playerId);
        player.matchRecord[history.recordType]--;
        this.state.matchHistory.splice(index, 1);
        this.setState(this.state);
    }

    render(){
        const { matchRecord, matchHistory, players, activeFormation } = this.state;

        return (
            <div>
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md-7" style={{'minHeight':'300px'}}>
                            <Field players={players} 
                            activeFormation={activeFormation} 
                            activateFormation={this.activateFormation} />
                        </div>
                        <div className="col-sm-12 col-md-5">
                            <RecordBoard matchRecord={matchRecord}
                            players={players}
                            activeFormation={activeFormation}
                            setFormation={this.setFormation}
                            record={this.record}/>
                        </div>
                    </div>
                </div>
                <RecordHistory matchRecord={matchRecord} matchHistory={matchHistory} recordDelete={this.recordDelete}/>
            </div>        
        )
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
        
    }
}

MatchRecordPage = connect(mapStateToProps, mapDispatchToProps)(MatchRecordPage);

export default MatchRecordPage;