import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


let HomePage = (props) => {    
    const { name } = props.member;

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 style={{"textAlign": "center"}}>{name}님, 환영합니다.</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-6">
                    <Link to="/team" className="btn btn-primary btn-block">팀관리</Link>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        member: state.authentication.member
    };
}

HomePage = connect(mapStateToProps)(HomePage);
export default HomePage;