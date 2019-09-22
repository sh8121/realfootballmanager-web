import React from 'react';
import { playerUtil } from '../../../helpers/playerUtil';

class RecordBoard extends React.Component {
    constructor(props){
        super(props);
        this.onPlayerChange = this.onPlayerChange.bind(this);
        this.onRecordClick = this.onRecordClick.bind(this);
        this.onRecordHistoryView = this.onRecordHistoryView.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onPlayerChange(e){
        const playerId = e.target.value;
        this.props.setFormation(playerId);
    }

    onRecordClick(e){
        const { players, activeFormation } = this.props;
        const recordType = e.target.value;
        const activePlayer = playerUtil.findPlayerByFormation(players, activeFormation);
        if(activePlayer){
            this.props.record(recordType, activePlayer.playerId);
        }
    }

    onRecordHistoryView(){
        const $ = window.$;
        $('#recordHistoryModal').modal('show');
    }

    onSave(){
        if(window.confirm('경기를 저장하시겠습니까?')){
            this.props.save();
        }
    }

    render(){
        const { matchRecord, players, activeFormation } = this.props;
        const activePlayer = playerUtil.findPlayerByFormation(players, activeFormation);
        
        return (
            <div className="card">
                <div className="card-header">
                    <button type="button" className="btn btn-outline-primary" disabled>홈팀({matchRecord.teamScore}) - 상대팀({matchRecord.competitorScore})</button>
                    <button type="button" className="btn btn-secondary" onClick={this.onRecordHistoryView}>경기기록</button>
                    <button type="button" className="btn btn-danger" onClick={this.onSave}>경기저장</button>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <select className="form-control" 
                                value={activePlayer ? activePlayer.playerId : ''}
                                onChange={this.onPlayerChange}>
                                <option value={''}>------</option>
                                {players && players.map((player)=>
                                    <option value={player.playerId}>{player.name}</option>
                                )}
                            </select>
                        </li>
                        <li className="list-group-item">
                            <button type="button" value="goal" className="btn btn-outline-danger btn-sm" onClick={this.onRecordClick}>골</button>
                            <button type="button" value="assist" className="btn btn-outline-danger btn-sm" onClick={this.onRecordClick}>도움</button>
                            <button type="button" value="shot" className="btn btn-outline-dark btn-sm" onClick={this.onRecordClick}>슈팅</button>
                            <button type="button" value="shotOnTarget" className="btn btn-outline-dark btn-sm" onClick={this.onRecordClick}>유효슈팅</button>
                        </li>
                        <li className="list-group-item">
                            <button type="button" value="shutOff" className="btn btn-outline-primary btn-sm" onClick={this.onRecordClick}>차단</button>
                            <button type="button" value="clear" className="btn btn-outline-primary btn-sm" onClick={this.onRecordClick}>클리어</button>
                            <button type="button" value="blocks" className="btn btn-outline-primary btn-sm" onClick={this.onRecordClick}>블락</button>
                            <button type="button" value="save" className="btn btn-outline-primary btn-sm" onClick={this.onRecordClick}>세이브</button>
                        </li>
                        <li className="list-group-item">
                            <button type="button" value="foul" className="btn btn-outline-warning btn-sm" onClick={this.onRecordClick}>파울</button>
                            <button type="button" value="offside" className="btn btn-outline-warning btn-sm" onClick={this.onRecordClick}>오프사이드</button>
                            <button type="button" value="yellowCard" className="btn btn-outline-warning btn-sm" onClick={this.onRecordClick}>경고</button>
                            <button type="button" value="redCard" className="btn btn-outline-warning btn-sm" onClick={this.onRecordClick}>퇴장</button>
                        </li>
                        <li className="list-group-item">
                            <button type="button" value="cornerKick" className="btn btn-outline-dark btn-sm" onClick={this.onRecordClick}>코너킥</button>
                            <button type="button" value="freeKick" className="btn btn-outline-dark btn-sm" onClick={this.onRecordClick}>프리킥</button>
                            <button type="button" value="panaltyKick" className="btn btn-outline-dark btn-sm" onClick={this.onRecordClick}>PK</button>                        
                        </li>
                        <li className="list-group-item">
                            <button type="button" value="passMiss" className="btn btn-outline-dark btn-sm" onClick={this.onRecordClick}>패스미스</button>
                            <button type="button" value="controlMiss" className="btn btn-outline-dark btn-sm" onClick={this.onRecordClick}>피탈취</button>                     
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default RecordBoard;