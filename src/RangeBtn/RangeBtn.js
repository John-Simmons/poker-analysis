import React from 'react';

const rangeBtn = (props) => {
    return (
        <div className='RangeBtn' id={props.type}>
            <div className="rb-content">{props.children}</div>
        </div>
    )
};

export default rangeBtn;
