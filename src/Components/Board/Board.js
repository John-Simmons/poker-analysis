import React from 'react';

const board = (props) => {

    let f1_suit=null;

    if (props.board.flop[0].suit==="s"){
        f1_suit=(
            <div className={props.board.flop[0].suit}>
                &spades;
            </div>
        );
    } else if (props.board.flop[0].suit==="d"){
        f1_suit=(
            <div className={props.board.flop[0].suit}>
                &diams;
            </div>
        );
    } else if (props.board.flop[0].suit==="c"){
        f1_suit=(
            <div className={props.board.flop[0].suit}>
                &clubs;
            </div>
        );
    } else if (props.board.flop[0].suit==="h"){
        f1_suit=(
            <div className={props.board.flop[0].suit}>
                &hearts;
            </div>
        );
    }

    let f2_suit=null;

    if (props.board.flop[1].suit==="s"){
        f2_suit=(
            <div className={props.board.flop[1].suit}>
                &spades;
            </div>
        );
    } else if (props.board.flop[1].suit==="d"){
        f2_suit=(
            <div className={props.board.flop[1].suit}>
                &diams;
            </div>
        );
    } else if (props.board.flop[1].suit==="c"){
        f2_suit=(
            <div className={props.board.flop[1].suit}>
                &clubs;
            </div>
        );
    } else if (props.board.flop[1].suit==="h"){
        f2_suit=(
            <div className={props.board.flop[1].suit}>
                &hearts;
            </div>
        );
    }

    let f3_suit=null;

    if (props.board.flop[2].suit==="s"){
        f3_suit=(
            <div className={props.board.flop[2].suit}>
                &spades;
            </div>
        );
    } else if (props.board.flop[2].suit==="d"){
        f3_suit=(
            <div className={props.board.flop[2].suit}>
                &diams;
            </div>
        );
    } else if (props.board.flop[2].suit==="c"){
        f3_suit=(
            <div className={props.board.flop[2].suit}>
                &clubs;
            </div>
        );
    } else if (props.board.flop[2].suit==="h"){
        f3_suit=(
            <div className={props.board.flop[2].suit}>
                &hearts;
            </div>
        );
    }

    let t_suit=null;

    if (props.board.turn.suit==="s"){
        t_suit=(
            <div className={props.board.turn.suit}>
                &spades;
            </div>
        );
    } else if (props.board.turn.suit==="d"){
        t_suit=(
            <div className={props.board.turn.suit}>
                &diams;
            </div>
        );
    } else if (props.board.turn.suit==="c"){
        t_suit=(
            <div className={props.board.turn.suit}>
                &clubs;
            </div>
        );
    } else if (props.board.turn.suit==="h"){
        t_suit=(
            <div className={props.board.turn.suit}>
                &hearts;
            </div>
        );
    }

    let r_suit=null;

    if (props.board.river.suit==="s"){
        r_suit=(
            <div className={props.board.river.suit}>
                &spades;
            </div>
        );
    } else if (props.board.river.suit==="d"){
        r_suit=(
            <div className={props.board.river.suit}>
                &diams;
            </div>
        );
    } else if (props.board.river.suit==="c"){
        r_suit=(
            <div className={props.board.river.suit}>
                &clubs;
            </div>
        );
    } else if (props.board.river.suit==="h"){
        r_suit=(
            <div className={props.board.river.suit}>
                &hearts;
            </div>
        );
    }

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
                            {f1_suit}
                    </div>
                    <div className="card">
                        {props.board.flop[1].suit!== "" ? props.board.flop[1].card.concat(props.board.flop[1].suit): "" }
                        {f2_suit}
                    </div>
                    <div className="card">
                        {props.board.flop[2].suit!== "" ? props.board.flop[2].card.concat(props.board.flop[2].suit): "" }
                        {f3_suit}
                    </div>
                </div>
                <div className="turn">
                    <h5>Turn</h5>
                    <div className="card">
                        {props.board.turn.suit!== "" ? props.board.turn.card.concat(props.board.turn.suit): "" }
                        {t_suit}
                    </div>
                </div>
                <div className="river">
                    <h5>River</h5>
                    <div className="card">
                        {props.board.river.suit!== "" ? props.board.river.card.concat(props.board.river.suit): "" }
                        {r_suit}
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
