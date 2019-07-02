import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PlayerManagementPage extends React.Component{
    componentDidMount(){
        
    }

    render(){
        const { finding, players } = this.props;

        return (
            <div>
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">선수아이디</th>
                            <th scope="col">선수이름</th>
                        </tr>
                    </thead>
                    <tbody>
                        { finding && 
                        <img alt="로딩중 이미지" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>}
                        { players && players.length > 0 && players.map((player, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{player.playerId}</td>
                                <td>{player.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/players/join" className="btn btn-primary">선수 등록</Link>
                <Link to="/" className="btn btn-link">홈으로</Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { finding, players } = state.team.finding;

    return {
        finding,
        players   
    };
}

PlayerManagementPage = connect(mapStateToProps)(PlayerManagementPage);
export default PlayerManagementPage;