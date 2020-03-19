import React from 'react';
import classNames from 'classnames'

const handBtn = (props) => {
    return (
        <div
            className={classNames("HandBtn", "text-center", props.isActive)}
            id="square"
            onClick={() => props.selectHand(props.children)}>
            <div
                className="hb-content"
                id = "hb-content">
                {props.children}
                <div className={classNames("suit-symbol", props.suit)}>
                </div>
            </div>
        </div>
    )
};

export default handBtn;
