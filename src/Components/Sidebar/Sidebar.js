import React from 'react';
import AddSelector from "../AddSelector/AddSelector"
import PlayerOverview from "../PlayerOverview/PlayerOverview"

const sidebar = (props) => {
    return (
        <div className="Sidebar">
            <div className="sb-header">
                <h3 className="sb-header-title">Players</h3>
                <AddSelector
                    addPlayer={props.addPlayer}
                />
            </div>
            {props.players.map((player, index) =>{
                return(
                    <PlayerOverview
                        player={player}
                        index={index}
                        key={player.id.concat(index)}
                        removePlayer={() => props.removePlayer(index)}
                    />
                )
            })}
        </div>
    )
}

export default sidebar;
