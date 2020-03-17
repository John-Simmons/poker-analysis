import React from 'react';
import classNames from 'classnames'

const rangeBtn = (props) => {
    return (
        <div
            className={classNames(props.isActive, props.type)}
            id="square">
            <div
                className="rb-content"
                id = "rb-content"
                onClick={() => props.selectHand(props.children)}>
                {props.children}
            </div>
        </div>
    )
};

export default rangeBtn;
