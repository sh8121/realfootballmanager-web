import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


let HomePage = (props) => {    
    const { name } = props.team;

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 style={{"textAlign": "center"}}>{name}님, 환영합니다.</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-6">
                    <Link to="/team/players" className="btn btn-primary btn-block">선수관리</Link>
                    <Link to="/team/matches" className="btn btn-primary btn-block">경기관리</Link>
                    <Link to="/login" className="btn btn-link btn-block">로그아웃</Link>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        team: state.team.authentication.team
    };
}

HomePage = connect(mapStateToProps)(HomePage);
export default HomePage;