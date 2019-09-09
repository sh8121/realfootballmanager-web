import React from 'react';
import {Player} from './Player';
import { Goal, Line, Penalty } from "./FieldElements";
import '../../../stylesheets/Field.css';

export const Field = (props) => {
    return (
        <div className="field">
            <div className="field__box">
                <Goal goalPosition="top"/>
                <Goal goalPosition="bottom"/>
                <Penalty penaltyPosition="top"/>
                <Penalty penaltyPosition="bottom"/>
                <Penalty penaltyPosition="arc--top"/>
                <Penalty penaltyPosition="arc--bottom"/>
                <Line linePosition="mid"/>
                <Line linePosition="circle"/>
                <Player playerPosition="gk" formationNumber={1} {...props}/>
                <Player playerPosition="right--wingback" formationNumber={2} {...props}/>
                <Player playerPosition="left--wingback" formationNumber={3} {...props}/>
                <Player playerPosition="left--centerback" formationNumber={4} {...props}/>
                <Player playerPosition="right--centerback" formationNumber={5} {...props}/>
                <Player playerPosition="right--center--midfielder" formationNumber={6} {...props}/>
                <Player playerPosition="left--center--midfielder" formationNumber={7} {...props}/>
                <Player playerPosition="center--attacking--midfielder" formationNumber={8} {...props}/>
                <Player playerPosition="right--wing--forward" formationNumber={9} {...props}/>
                <Player playerPosition="left--wing--forward" formationNumber={10} {...props}/>
                <Player playerPosition="center--forward" formationNumber={11} {...props}/>
            </div>
        </div>
    );
}