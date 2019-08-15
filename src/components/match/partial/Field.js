import React from 'react';
import {Player} from './Player';
import { Goal, Line, Penalty } from "./FieldElements";
import '../../../stylesheets/Field.css';

export const Field = () => {
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
                <Player playerPosition="gk" formationNumber={1}/>
                <Player playerPosition="right--wingback" formationNumber={2}/>
                <Player playerPosition="left--wingback" formationNumber={3}/>
                <Player playerPosition="left--centerback" formationNumber={4}/>
                <Player playerPosition="right--centerback" formationNumber={5}/>
                <Player playerPosition="right--center--midfielder" formationNumber={6}/>
                <Player playerPosition="left--center--midfielder" formationNumber={7}/>
                <Player playerPosition="center--attacking--midfielder" formationNumber={8}/>
                <Player playerPosition="right--wing--forward" formationNumber={9}/>
                <Player playerPosition="left--wing--forward" formationNumber={10}/>
                <Player playerPosition="center--forward" formationNumber={11}/>
            </div>
        </div>
    );
}