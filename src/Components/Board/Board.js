import React from 'react';

const board = (props) => {
    return (
        <div className="Board">
            <h3>
                Board
            </h3>
            <div className="streets">
                <div className="flop">
                    <h5>Flop</h5>
                    <div className="card">
                            {props.board.flop[0].suit!== "" ? props.board.flop[0].card.concat(props.board.flop[0].suit): "" }
                            <div className={props.board.flop[0].suit}>
                            </div>
                    </div>
                    <div className="card">
                        {props.board.flop[1].suit!== "" ? props.board.flop[1].card.concat(props.board.flop[1].suit): "" }
                        <div className={props.board.flop[1].suit}>
                        </div>
                    </div>
                    <div className="card">
                        {props.board.flop[2].suit!== "" ? props.board.flop[2].card.concat(props.board.flop[2].suit): "" }
                        <div className={props.board.flop[2].suit}>
                        </div>
                    </div>
                </div>
                <div className="turn">
                    <h5>Turn</h5>
                    <div className="card">
                        {props.board.turn.suit!== "" ? props.board.turn.card.concat(props.board.turn.suit): "" }
                        <div className={props.board.turn.suit}>
                        </div>
                    </div>
                </div>
                <div className="river">
                    <h5>River</h5>
                    <div className="card">
                        {props.board.river.suit!== "" ? props.board.river.card.concat(props.board.river.suit): "" }
                        <div className={props.board.river.suit}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="board-inputs">
                <div className="flop">
                    <input
                        className="input form-control"
                        id="flop-0"
                        maxLength="2"
                        onChange={props.enterBoard}
                        value={props.board.flop[0].card.concat(props.board.flop[0].suit)}>
                    </input>
                    <input
                        className="input form-control"
                        id="flop-1"
                        maxLength="2"
                        onChange={props.enterBoard}
                        value={props.board.flop[1].card.concat(props.board.flop[1].suit)}>
                    </input>
                    <input
                        className="input form-control"
                        id="flop-2"
                        maxLength="2"
                        onChange={props.enterBoard}
                        value={props.board.flop[2].card.concat(props.board.flop[2].suit)}>
                    </input>
                </div>
                <div className="turn">
                    <input
                        className="input form-control"
                        id="turn-0"
                        maxLength="2"
                        onChange={props.enterBoard}
                        value={props.board.turn.card.concat(props.board.turn.suit)}>
                    </input>
                </div>
                <div className="river">
                    <input
                        className="input form-control"
                        id="river-0"
                        maxLength="2"
                        onChange={props.enterBoard}
                        value={props.board.river.card.concat(props.board.river.suit)}>
                    </input>
                </div>
            </div>
        </div>
    )
}

export default board;
