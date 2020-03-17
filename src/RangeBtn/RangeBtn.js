import React from 'react';
import classNames from 'classnames'

const rangeBtn = (props) => {
    return (
        <div className='RangeBtn' id={props.type}>
            <div
                className={classNames("rb-content", props.isActive)}
                onClick={() => props.selectHand(props.children)}>
                {props.children}
            </div>
        </div>
    )
};

export default rangeBtn;
