import React from 'react';

const addSelector = (props) => {
    return(
        <div className="AddSelector">
            <div
                className="add-btn"
                onClick={props.addPlayer}>
                +
            </div>
            <h5 className="add-btn-label">
                {props.children}
            </h5>
        </div>
    )
}

export default addSelector;
