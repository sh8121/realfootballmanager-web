import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MatchListPage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { matches } = this.props;

        return (
            <div>
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">상대팀</th>
                            <th scope="col">득점</th>
                            <th scope="col">상대팀득점</th>
                            <th scope="col">골</th>
                            <th scope="col">도움</th>
                            <th scope="col">슈팅</th>
                            <th scope="col">유효슈팅</th>
                            <th scope="col">차단</th>
                            <th scope="col">클리어</th>
                            <th scope="col">블락</th>
                            <th scope="col">세이브</th>
                            <th scope="col">파울</th>
                            <th scope="col">오프사이드</th>
                            <th scope="col">경고</th>
                            <th scope="col">퇴장</th>
                            <th scope="col">코너킥</th>
                            <th scope="col">프리킥</th>
                            <th scope="col">PK</th>
                            <th scope="col">패스미스</th>
                            <th scope="col">피탈취</th>
                        </tr>
                    </thead>
                    <tbody>
                        { matches && matches.length > 0 && matches.map((match, index) => (
                            <tr key={`match_${match.matchId}`}>
                                <th scope="row">{index + 1}</th>
                                <td>{match.competitorName}</td>
                                <td>{match.teamScore}</td>
                                <td>{match.competitorScore}</td>
                                <td>{match.goal}</td>
                                <td>{match.assist}</td>
                                <td>{match.shot}</td>
                                <td>{match.shotOnTarget}</td>
                                <td>{match.shutOff}</td>
                                <td>{match.clear}</td>
                                <td>{match.blocks}</td>
                                <td>{match.save}</td>
                                <td>{match.foul}</td>
                                <td>{match.offside}</td>
                                <td>{match.yellowCard}</td>
                                <td>{match.redCard}</td>
                                <td>{match.cornerKick}</td>
                                <td>{match.freeKick}</td>
                                <td>{match.panaltyKick}</td>
                                <td>{match.passMiss}</td>
                                <td>{match.controlMiss}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/match/create" className="btn btn-primary">경기 생성</Link>
                <Link to="/" className="btn btn-link">홈으로</Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        matches: Object.assign([], state.matches)
    }
}

MatchListPage = connect(mapStateToProps, null)(MatchListPage);
export default MatchListPage;