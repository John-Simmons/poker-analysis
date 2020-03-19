import React from 'react';
import classNames from 'classnames'

const toggleSelector = (props) => {
    return (
        <div className="ToggleSelector">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label
                    className={
                        classNames("btn btn-secondary toggle-btn", props.type==="range" ? "active": "")
                    }
                    id="toggle-option">
                    <input
                        type="radio"
                        name="options"
                        id="option1"
                        onClick={props.type==="hand" ? props.toggleType:""}
                        defaultChecked/>
                        Range
                </label>
                <label
                    className={
                        classNames("btn btn-secondary toggle-btn", props.type==="hand" ? "active": "")
                    }
                    id="toggle-option">
                    <input
                        type="radio"
                        name="options"
                        id="option2"
                        onClick={props.type==="range" ? props.toggleType:""}/>
                        Hand
                </label>
            </div>
        </div>
    )
}

export default toggleSelector;
