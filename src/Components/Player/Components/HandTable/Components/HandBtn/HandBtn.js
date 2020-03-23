import React from 'react';
import classNames from 'classnames'

const handBtn = (props) => {

    let suitSymbol=null;

    if (props.suit==="spades"){
        suitSymbol=(
            <div className={classNames("suit-symbol", props.suit)}>
                &spades;
            </div>
        );
    } else if (props.suit==="diamonds"){
        suitSymbol=(
            <div className={classNames("suit-symbol", props.suit)}>
                &diams;
            </div>
        );
    } else if (props.suit==="clubs"){
        suitSymbol=(
            <div className={classNames("suit-symbol", props.suit)}>
                &clubs;
            </div>
        );
    } else if (props.suit==="hearts"){
        suitSymbol=(
            <div className={classNames("suit-symbol", props.suit)}>
                &hearts;
            </div>
        );
    }

    return (
        <div
            className={classNames("HandBtn", "text-center", props.isActive)}
            id="square"
            onClick={() => props.selectHand(props.children)}>
            <div
                className="hb-content"
                id = "hb-content">
                {props.children}
                {suitSymbol}
            </div>
        </div>
    )
};

export default handBtn;
