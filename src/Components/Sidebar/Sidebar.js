import React from 'react';
import AddPlayer from "./Components/AddPlayer/AddPlayer"
import PlayerOverview from "./Components/PlayerOverview/PlayerOverview"

const sidebar = (props) => {
    return (
        <div className="Sidebar">
            <div className="sb-header">
                <h3 className="sb-header-title">Players</h3>
                <AddPlayer
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
