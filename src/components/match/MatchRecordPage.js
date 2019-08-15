import React from 'react';
import { connect } from 'react-redux';
import { Field } from './partial/Field';
import RecordBoard from './partial/RecordBoard';
import { matchAction } from '../../actions/matchAction';
import RecordHistory from './partial/RecordHistory';

class MatchRecordPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const { team, initialize } = this.props;
        initialize(team.teamId);
    }

    render(){
        return (
            <div>
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md-7" style={{'minHeight':'300px'}}>
                            <Field />
                        </div>
                        <div className="col-sm-12 col-md-5">
                            <RecordBoard />
                        </div>
                    </div>
                </div>
                <RecordHistory />
            </div>        
        )
    }
}

function mapStateToProps(state){
    const { team } = state.authentication;
    return {
        team
    };
}

function mapDispatchToProps(dispatch){
    return {
        initialize: (teamId) => dispatch(matchAction.initialize(teamId))
    }
}

MatchRecordPage = connect(mapStateToProps, mapDispatchToProps)(MatchRecordPage);

export default MatchRecordPage;