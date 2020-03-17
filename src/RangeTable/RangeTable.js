import React from 'react';
import RangeBtn from "../RangeBtn/RangeBtn"

//Range Chart to construct range table
const rangeChart = [[{id:"AA", type:"pair"}, {id:"AKo", type:"offsuit"}, {id:"AQo", type:"offsuit"}, {id:"AJo", type:"offsuit"}, {id:"ATo", type:"offsuit"}, {id:"A9o", type:"offsuit"}, {id:"A8o", type:"offsuit"}, {id:"A7o", type:"offsuit"}, {id:"A6o", type:"offsuit"}, {id:"A5o", type:"offsuit"}, {id:"A4o", type:"offsuit"}, {id:"A3o", type:"offsuit"}, {id:"A2o", type:"offsuit"}],
[{id:"AKs", type:"suited"}, {id:"KK", type:"pair"}, {id:"KQo", type:"offsuit"}, {id:"KJo", type:"offsuit"}, {id:"KTo", type:"offsuit"}, {id:"K9o", type:"offsuit"}, {id:"K8o", type:"offsuit"}, {id:"K7o", type:"offsuit"}, {id:"K6o", type:"offsuit"}, {id:"K5o", type:"offsuit"}, {id:"K4o", type:"offsuit"}, {id:"K3o", type:"offsuit"}, {id:"K2o", type:"offsuit"}],
[{id:"AQs", type:"suited"}, {id:"KQs", type:"suited"}, {id:"QQ", type:"pair"}, {id:"QJo", type:"offsuit"}, {id:"QTo", type:"offsuit"}, {id:"Q9o", type:"offsuit"}, {id:"Q8o", type:"offsuit"}, {id:"Q7o", type:"offsuit"}, {id:"Q6o", type:"offsuit"}, {id:"Q5o", type:"offsuit"}, {id:"Q4o", type:"offsuit"}, {id:"Q3o", type:"offsuit"}, {id:"Q2o", type:"offsuit"}],
[{id:"AJs", type:"suited"}, {id:"KJs", type:"suited"}, {id:"QJs", type:"suited"}, {id:"JJ", type:"pair"}, {id:"JTo", type:"offsuit"}, {id:"J9o", type:"offsuit"}, {id:"J8o", type:"offsuit"}, {id:"J7o", type:"offsuit"}, {id:"J6o", type:"offsuit"}, {id:"J5o", type:"offsuit"}, {id:"J4o", type:"offsuit"}, {id:"J3o", type:"offsuit"}, {id:"J2o", type:"offsuit"}],
[{id:"ATs", type:"suited"}, {id:"KTs", type:"suited"}, {id:"QTs", type:"suited"}, {id:"JTs", type:"suited"}, {id:"TT", type:"pair"}, {id:"T9o", type:"offsuit"}, {id:"T8o", type:"offsuit"}, {id:"T7o", type:"offsuit"}, {id:"T6o", type:"offsuit"}, {id:"T5o", type:"offsuit"}, {id:"T4o", type:"offsuit"}, {id:"T3o", type:"offsuit"}, {id:"T2o", type:"offsuit"}],
[{id:"A9s", type:"suited"}, {id:"K9s", type:"suited"}, {id:"Q9s", type:"suited"}, {id:"J9s", type:"suited"}, {id:"T9s", type:"suited"}, {id:"99", type:"pair"}, {id:"98o", type:"offsuit"}, {id:"97o", type:"offsuit"}, {id:"96o", type:"offsuit"}, {id:"95o", type:"offsuit"}, {id:"94o", type:"offsuit"}, {id:"93o", type:"offsuit"}, {id:"92o", type:"offsuit"}],
[{id:"A8s", type:"suited"}, {id:"K8s", type:"suited"}, {id:"Q8s", type:"suited"}, {id:"J8s", type:"suited"}, {id:"T8s", type:"suited"}, {id:"98s", type:"suited"}, {id:"88", type:"pair"}, {id:"87o", type:"offsuit"}, {id:"86o", type:"offsuit"}, {id:"85o", type:"offsuit"}, {id:"84o", type:"offsuit"}, {id:"83o", type:"offsuit"}, {id:"82o", type:"offsuit"}],
[{id:"A7s", type:"suited"}, {id:"K7s", type:"suited"}, {id:"Q7s", type:"suited"}, {id:"J7s", type:"suited"}, {id:"T7s", type:"suited"}, {id:"97s", type:"suited"}, {id:"87s", type:"suited"}, {id:"77", type:"pair"}, {id:"76o", type:"offsuit"}, {id:"75o", type:"offsuit"}, {id:"74o", type:"offsuit"}, {id:"73o", type:"offsuit"}, {id:"72o", type:"offsuit"}],
[{id:"A6s", type:"suited"}, {id:"K6s", type:"suited"}, {id:"Q6s", type:"suited"}, {id:"J6s", type:"suited"}, {id:"T6s", type:"suited"}, {id:"96s", type:"suited"}, {id:"86s", type:"suited"}, {id:"76s", type:"suited"}, {id:"66", type:"pair"}, {id:"65o", type:"offsuit"}, {id:"64o", type:"offsuit"}, {id:"63o", type:"offsuit"}, {id:"62o", type:"offsuit"}],
[{id:"A5s", type:"suited"}, {id:"K5s", type:"suited"}, {id:"Q5s", type:"suited"}, {id:"J5s", type:"suited"}, {id:"T5s", type:"suited"}, {id:"95s", type:"suited"}, {id:"85s", type:"suited"}, {id:"75s", type:"suited"}, {id:"65s", type:"suited"}, {id:"55", type:"pair"}, {id:"54o", type:"offsuit"}, {id:"63o", type:"offsuit"}, {id:"62o", type:"offsuit"}],
[{id:"A4s", type:"suited"}, {id:"K4s", type:"suited"}, {id:"Q4s", type:"suited"}, {id:"J4s", type:"suited"}, {id:"T4s", type:"suited"}, {id:"94s", type:"suited"}, {id:"84s", type:"suited"}, {id:"74s", type:"suited"}, {id:"64s", type:"suited"}, {id:"54s", type:"suited"}, {id:"44", type:"pair"}, {id:"43o", type:"offsuit"}, {id:"42o", type:"offsuit"}],
[{id:"A3s", type:"suited"}, {id:"K3s", type:"suited"}, {id:"Q3s", type:"suited"}, {id:"J3s", type:"suited"}, {id:"T3s", type:"suited"}, {id:"93s", type:"suited"}, {id:"83s", type:"suited"}, {id:"73s", type:"suited"}, {id:"63s", type:"suited"}, {id:"53s", type:"suited"}, {id:"43s", type:"suited"}, {id:"33", type:"pair"}, {id:"32o", type:"offsuit"}],
[{id:"A2s", type:"suited"}, {id:"K2s", type:"suited"}, {id:"Q2s", type:"suited"}, {id:"J2s", type:"suited"}, {id:"T2s", type:"suited"}, {id:"92s", type:"suited"}, {id:"82s", type:"suited"}, {id:"72s", type:"suited"}, {id:"62s", type:"suited"}, {id:"52s", type:"suited"}, {id:"42s", type:"suited"}, {id:"32s", type:"suited"}, {id:"22", type:"pair"}]];

const rangeTable = (props) => {
    return (
        <div className="RangeTable">
            <h3
                className="rt-header">
                Hero
            </h3>
            <div className="rt-input-container input-group">
                <input
                    className="form-control rt-input"
                    id="rt-range-input"
                    placeholder="Hand range"
                    type="text"
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
            <div className="row" id="rt-selector">
                {rangeChart.map(column => {
                    return <div
                        className="col"
                        id="rt-col"
                        key={column[0].id}>
                        {column.map(hand => {
                            return <RangeBtn
                                type={hand.type}
                                isActive={props.range.includes(hand.id) ? 'rb-active': 'RangeBtn'}
                                selectHand={props.selectHand}
                                key={hand.id}>
                                {hand.id}
                            </RangeBtn>
                        })}
                    </div>
                })}
            </div>
        </div>
    )
};

export default rangeTable;
