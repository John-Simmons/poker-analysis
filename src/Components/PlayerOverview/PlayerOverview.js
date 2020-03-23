import React from 'react';

const playerOverview = (props) => {

    //Create removeable
    let closeBtn = null;
    if (props.player.removable){
        closeBtn = (
            <span
                className="po-close-btn"
                onClick={props.removePlayer}>
                &times;
            </span>
        );
    }

    return (
        <div className="PlayerOverview">
            <div className="po-header">
                <h5 className="po-header-name">{props.player.id.concat(" ", props.index!==0 ? props.index:"")}</h5>
                {closeBtn}
            </div>
            <div className="po-equity">
                <span>Total: {props.player.equity.total}%</span>
                <span>Win: {props.player.equity.win}%</span>
                <span>Tie: {props.player.equity.tie}%</span>
            </div>
        </div>
    )
}

export default playerOverview;
