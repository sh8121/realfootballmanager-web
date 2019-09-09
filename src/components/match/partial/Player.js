import React from 'react';
import Draggable from 'react-draggable';
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

export {Player};