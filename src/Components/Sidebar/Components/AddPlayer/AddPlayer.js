import React from 'react';

const addPlayer = (props) => {
    return(
        <div className="AddPlayer">
            <div
                className="add-btn"
                onClick={props.addPlayer}>
                +
            </div>
            <h6 className="add-btn-label">
                {props.children}
            </h6>
        </div>
    )
}

export default addPlayer;
