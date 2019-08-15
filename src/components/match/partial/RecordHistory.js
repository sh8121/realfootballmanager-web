import React from 'react';
import { connect } from 'react-redux';
import { matchAction } from '../../../actions/matchAction';

class RecordHistory extends React.Component {
    constructor(props){
        super(props);

        this.onRecordDelete = this.onRecordDelete.bind(this);
    }

    onRecordDelete(history, index){
        this.props.recordDelete(history, index);
    }

    render(){
        const {matchRecord, matchHistory} = this.props;
        return (
            <div className="modal fade" id="recordHistoryModal" tabIndex="-1" role="dialog" aria-labelledby="recordHistoryModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="recordHistoryModalLabel">경기기록</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row no-gutters">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-8">골</div>
                                                <div className="col-4">{matchRecord.goal}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">도움</div>
                                                <div className="col-4">{matchRecord.assist}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">슈팅</div>
                                                <div className="col-4">{matchRecord.shot}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">유효슈팅</div>
                                                <div className="col-4">{matchRecord.shotOnTarget}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">차단</div>
                                                <div className="col-4">{matchRecord.shutOff}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">클리어</div>
                                                <div className="col-4">{matchRecord.clear}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">블락</div>
                                                <div className="col-4">{matchRecord.block}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">세이브</div>
                                                <div className="col-4">{matchRecord.save}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">파울</div>
                                                <div className="col-4">{matchRecord.foul}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">오프사이드</div>
                                                <div className="col-4">{matchRecord.offside}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">경고</div>
                                                <div className="col-4">{matchRecord.yellowCard}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">퇴장</div>
                                                <div className="col-4">{matchRecord.redCard}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">코너킥</div>
                                                <div className="col-4">{matchRecord.cornerKick}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">프리킥</div>
                                                <div className="col-4">{matchRecord.freeKick}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">PK</div>
                                                <div className="col-4">{matchRecord.panaltyKick}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">패스미스</div>
                                                <div className="col-4">{matchRecord.passMiss}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">피탈취</div>
                                                <div className="col-4">{matchRecord.controlMiss}</div>
                                            </div>
                                        </div>      
                                    </div>
                                    <div className="col-sm-12 col-md-7">
                                        <ul className="list-group">
                                            {matchHistory.map((history, index)=>
                                                <li className="list-group-item">
                                                    {history.name}이 {history.recordType}
                                                    <button type="button" className="btn-link" onClick={()=>this.onRecordDelete(history, index)}>삭제</button>
                                                </li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        matchRecord: Object.assign({}, state.match.newMatch.matchRecord),
        matchHistory: Object.assign([], state.match.newMatch.matchHistory)
    }
}

function mapDispatchToProps(dispatch){
    return {
        recordDelete: (history, index) => dispatch(matchAction.recordDelete(history, index))
    }
}

RecordHistory = connect(mapStateToProps, mapDispatchToProps)(RecordHistory);

export default RecordHistory;