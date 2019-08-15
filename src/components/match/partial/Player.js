import React from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import { matchAction } from '../../../actions/matchAction';
import { playerUtil } from '../../../helpers/playerUtil';

let Player = (props) => {
    const {formationNumber, playerPosition, players, activeFormation} = props;
    const {activateFormation} = props;
    const player = playerUtil.findPlayerByFormation(players, formationNumber);

    return(
        <Draggable>
            <div className={`player player__item 
                ${activeFormation === formationNumber ? 'player__item--focus' : ''} 
                player__item--${playerPosition}`} onClick={()=>{activateFormation(formationNumber)}}>
                <div className="player player__item--shirt">
                    {player && player.number}
                </div>
                <div className="player player__item--label">
                    {player && player.name}
                </div>
            </div>
        </Draggable>
    );
}

function mapStateToProps(state){
    return {
        players: Object.assign([], state.match.newMatch.players),
        activeFormation: state.match.newMatch.activeFormation
    }
}

function mapDispatchToProps(dispatch){
    return {
        activateFormation: (formationNumber) => dispatch(matchAction.activateFormation(formationNumber))
    }
}

Player = connect(mapStateToProps, mapDispatchToProps)(Player);
export {Player};