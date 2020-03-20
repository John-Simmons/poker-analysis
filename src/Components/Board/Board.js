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
                    </div>
                    <div className="card">
                    </div>
                    <div className="card">
                    </div>
                </div>
                <div className="turn">
                    <h5>Turn</h5>
                    <div className="card">
                    </div>
                </div>
                <div className="river">
                    <h5>River</h5>
                    <div className="card">
                    </div>
                </div>
            </div>
            <div className="board-inputs">
                <div className="flop">
                    <input className="input form-control">
                    </input>
                    <input className="input form-control">
                    </input>
                    <input className="input form-control">
                    </input>
                </div>
                <div className="turn">
                    <input className="input form-control">
                    </input>
                </div>
                <div className="river">
                    <input className="input form-control">
                    </input>
                </div>
            </div>
        </div>
    )
}

export default board;
