import React from 'react';
import RangeTable from "../RangeTable/RangeTable"
import HandTable from "../HandTable/HandTable"
import ToggleSelector from "../ToggleSelector/ToggleSelector"

const player = (props) => {
    //Create removeable
    let closeBtn = null;
    if (props.player.removable){
        closeBtn = (
            <div
                className="close-btn"
                onClick={props.removePlayer}>
                &times;
            </div>
        );
    }

    //diplay hand or range table
    let table = null;
    if (props.player.type === "range"){
        table = (
            <RangeTable
                range={props.player.range}
                index={props.index}
                selectRange={props.selectRange}
            />
        );
    } else if (props.player.type === "hand"){
        table = (
            <HandTable
                range={props.player.range}
                index={props.index}
                selectHand={props.selectHand}
            />
        );
    }

    return (
        <div className="Player">

            <h3
                className="rt-header">
                {props.index>0 ? props.children.concat(" ", props.index): props.children}
            </h3>

            {closeBtn}

            <ToggleSelector
                type={props.player.type}
                toggleType={props.toggleType}
            />

            <div className="rt-input-container input-group">

                <textarea
                    className="form-control rt-input"
                    id="rt-range-input"
                    placeholder={props.player.type.charAt(0).toUpperCase() + props.player.type.slice(1)}
                    type="text"
                    rows="1"
                    readOnly
                    value={props.player.range.join(", ")}
                    onBlur={props.enterRange}
                />

                <span className="input-group-btn">
                    <button
                        type="button"
                        className="btn btn-secondary clear-range"
                        id="clear-btn"
                        onClick={props.clearRange}>
                        Clear
                    </button>
                </span>

            </div>

            {table}

        </div>
    )
}

export default player;
