import React from 'react';
import classNames from 'classnames'

const handBtn = (props) => {
    return (
        <div
            className={classNames("HandBtn", props.isActive, props.suit)}
            id="square"
            onClick={() => props.selectHand(props.children)}>
            <div
                className="hb-content"
                id = "hb-content">
                {props.children}
            </div>
        </div>
    )
};

export default handBtn;
