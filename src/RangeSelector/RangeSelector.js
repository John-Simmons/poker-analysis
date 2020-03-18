import React from 'react';
import RangeTable from "../RangeTable/RangeTable"

const rangeSelector = (props) => {
    return (
        <div className="RangeSelector">
            <h3
                className="rt-header">
                {props.children}
            </h3>
            <div className="rt-input-container input-group">
                <input
                    className="form-control rt-input"
                    id="rt-range-input"
                    placeholder="Hand range"
                    type="text"
                    readOnly
                    value={props.range.join(", ")}
                    onBlur={props.enterRange}
                />
                <span className="input-group-btn">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={props.clearRange}>
                        Clear
                    </button>
                </span>
            </div>
            <RangeTable
                range={props.range}
                index={props.index}
                selectHand={props.selectHand}
            />
        </div>
    )
}

export default rangeSelector;
