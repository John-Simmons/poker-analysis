import React from 'react';
import HandBtn from "./Components/HandBtn/HandBtn"

//Range Chart to construct range table
const handChart = [[{id:"Ad", suit:"diamonds"}, {id:"Ac", suit:"clubs"}, {id:"Ah", suit:"hearts"}, {id:"As", suit:"spades"}],
[{id:"Kd", suit:"diamonds"}, {id:"Kc", suit:"clubs"}, {id:"Kh", suit:"hearts"}, {id:"Ks", suit:"spades"}],
[{id:"Qd", suit:"diamonds"}, {id:"Qc", suit:"clubs"}, {id:"Qh", suit:"hearts"}, {id:"Qs", suit:"spades"}],
[{id:"Jd", suit:"diamonds"}, {id:"Jc", suit:"clubs"}, {id:"Jh", suit:"hearts"}, {id:"Js", suit:"spades"}],
[{id:"Td", suit:"diamonds"}, {id:"Tc", suit:"clubs"}, {id:"Th", suit:"hearts"}, {id:"Ts", suit:"spades"}],
[{id:"9d", suit:"diamonds"}, {id:"9c", suit:"clubs"}, {id:"9h", suit:"hearts"}, {id:"9s", suit:"spades"}],
[{id:"8d", suit:"diamonds"}, {id:"8c", suit:"clubs"}, {id:"8h", suit:"hearts"}, {id:"8s", suit:"spades"}],
[{id:"7d", suit:"diamonds"}, {id:"7c", suit:"clubs"}, {id:"7h", suit:"hearts"}, {id:"7s", suit:"spades"}],
[{id:"6d", suit:"diamonds"}, {id:"6c", suit:"clubs"}, {id:"6h", suit:"hearts"}, {id:"6s", suit:"spades"}],
[{id:"5d", suit:"diamonds"}, {id:"5c", suit:"clubs"}, {id:"5h", suit:"hearts"}, {id:"5s", suit:"spades"}],
[{id:"4d", suit:"diamonds"}, {id:"4c", suit:"clubs"}, {id:"4h", suit:"hearts"}, {id:"4s", suit:"spades"}],
[{id:"3d", suit:"diamonds"}, {id:"3c", suit:"clubs"}, {id:"3h", suit:"hearts"}, {id:"3s", suit:"spades"}],
[{id:"2d", suit:"diamonds"}, {id:"2c", suit:"clubs"}, {id:"2h", suit:"hearts"}, {id:"2s", suit:"spades"}]]

const handTable = (props) => {
    return (
        <div className="HandTable">
            <div className="row" id="ht-selector">
                {handChart.map(column => {
                    return <div
                        className="col"
                        id="ht-col"
                        key={column[0].id}>
                        {column.map(hand => {
                            return <HandBtn
                                suit={hand.suit}
                                index={props.index}
                                isActive={props.range.includes(hand.id) ? 'hb-active': 'HandBtn'}
                                selectHand={props.selectHand}
                                key={hand.id}>
                                {hand.id}
                            </HandBtn>
                        })}
                    </div>
                })}
            </div>
        </div>
    )
};

export default handTable;
