import React from 'react';
import RangeTable from "../RangeTable/RangeTable"
import ToggleSelector from "../ToggleSelector/ToggleSelector"

const rangeSelector = (props) => {
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

    return (
        <div className="RangeSelector">
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
                    placeholder="Range"
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
            <RangeTable
                range={props.player.range}
                index={props.index}
                selectHand={props.selectHand}
            />
        </div>
    )
}

export default rangeSelector;
