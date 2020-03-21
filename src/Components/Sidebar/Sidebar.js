import React from 'react';
import AddSelector from "../AddSelector/AddSelector"

const sidebar = (props) => {
    return (
        <div className="Sidebar">
            <h3>Overview</h3>
            <AddSelector
                addPlayer={props.addPlayer}>
                Add Player
            </AddSelector>
        </div>
    )
}

export default sidebar;
