export const playerUtil = {
    findPlayerById,
    findPlayerByFormation
}

function findPlayerById(players, playerId){
    if(!players || !playerId){
        return null;
    }
    for(let player of players){
        if(player.playerId === playerId){
            return player;
        }
    }
    return null;
}

function findPlayerByFormation(players, formationNumber){
    if(!players || !formationNumber){
        return null;
    }
    for(let player of players){
        if(player.formationNumber === formationNumber){
            return player;
        }
    }
    return null;
}