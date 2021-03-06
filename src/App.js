import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Player from "./Components/Player/Player"
import './Components/Player/Player.css'
import './Components/Player/Components/RangeTable/RangeTable.css'
import './Components/Player/Components/RangeTable/Components/RangeBtn/RangeBtn.css'
import './Components/Player/Components/HandTable/HandTable.css'
import './Components/Player/Components/HandTable/Components/HandBtn/HandBtn.css'
import './Components/Player/Components/ToggleSelector/ToggleSelector.css'

import Board from "./Components/Board/Board"
import './Components/Board/Board.css'

import Sidebar from "./Components/Sidebar/Sidebar"
import './Components/Sidebar/Sidebar.css'
import './Components/Sidebar/Components/AddPlayer/AddPlayer.css'
import './Components/Sidebar/Components/PlayerOverview/PlayerOverview.css'

class App extends Component {
    state = {
        players: [
            {
                id: "Hero",
                range: [],
                type: "hand",
                removable: false,
                equity: {
                    total:"0",
                    win:"0",
                    tie:"0"
                }
            },
            {
                id: "Villian",
                range: [], type:
                "range",
                removable: true,
                equity: {
                    total:"0",
                    win:"0",
                    tie:"0"
                }
            }
        ],
        board: {
            visible: false,
            flop: [
                {card: "", suit: ""},
                {card: "", suit: ""},
                {card: "", suit: ""}
            ],
            turn: {card:"", suit:""},
            river: {card:"", suit:""}
        }

    }

    //Opens/closes the board section
    toggleBoard = () =>{
        const newBoard = Object.assign({}, this.state.board);

        if (newBoard.visible){
            newBoard.visible = false;
        }else{
            newBoard.visible = true;
        }

        this.setState({board: newBoard});
    }

    //Ensures that an entered card is a valid card
    toValidCard = (value) => {
        const newValue = ["",""];
        const cardVal = ["2", "3", "4", "5", "6", "7", "8", "9", "t", "j", "q", "k", "a"];
        const suitVal = ["d", "c", "h", "s"];

        if (value.length === 0){
            newValue[0] = "";
            newValue[1] = "";
        }else if (value.length === 1){
            if (cardVal.includes(value)){
                newValue[0] = value.toUpperCase();
            }else{
                newValue[0] = "";
            }
        }else if (value.length === 2){
            if (cardVal.includes(value[0])){
                newValue[0] = value[0].toUpperCase();
            }else{
                newValue[0].card = "";
            }

            if (suitVal.includes(value[1])){
                newValue[1] = value[1].toLowerCase();
            }else{
                newValue[1] = "";
            }
        }

        return newValue;
    }

    //Adds card to board
    enterBoard = (event) => {
        const newBoard = Object.assign({}, this.state.board);
        const index = event.target.id.split("-");
        const value = event.target.value.toLowerCase();

        if (index[0] === "flop"){
            [newBoard.flop[index[1]].card,newBoard.flop[index[1]].suit] = this.toValidCard(value);
        }else if (index[0] === "turn"){
            [newBoard.turn.card, newBoard.turn.suit] = this.toValidCard(value);
        }else if (index[0] === "river"){
            [newBoard.river.card, newBoard.river.suit] = this.toValidCard(value);
        }

        this.setState({board: newBoard})
    }

    //Switch from hand to range selector and vice versa
    toggleTypeHandler = (index) => {
        const newPlayers = [...this.state.players];
        const type = newPlayers[index].type;

        if (type === "range"){
            newPlayers[index].type = "hand";
            newPlayers[index].range = [];
        } else {
            newPlayers[index].type = "range";
            newPlayers[index].range = [];
        }

        this.setState({players: newPlayers});
    }

    //Add/Subtracts from the range based on the user selection
    selectHandHandler = (handId, index) => {
        const newPlayers = [...this.state.players];

        if (newPlayers[index].range.includes(handId)){
            const handIndex = newPlayers[index].range.indexOf(handId);
            newPlayers[index].range.splice(handIndex, 1);

            this.setState({players: newPlayers});

        } else if (newPlayers[index].range.length < 2){
            newPlayers[index].range.push(handId);

            this.setState({players: newPlayers});
        }
    }

    //Clears the range selected
    clearRangeHandler = (index) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].range = [];
        this.setState({players: newPlayers});
    }

    //Add/subtracts from the range based on the user selection
    selectRangeHandler = (handId, index) => {
        const newPlayers = [...this.state.players];
        const range = [...this.state.players[index].range];

        if (range.includes(handId)){
            const handIndex = range.indexOf(handId);
            range.splice(handIndex, 1);
            newPlayers[index].range = range;
            this.setState({players: newPlayers});
        } else {
            newPlayers[index].range.push(handId);

            this.setState({players: newPlayers});
        }
    }

    //Adds a new player to the list
    addPlayerHandler = () => {
        const newPlayers = [...this.state.players];

        newPlayers.push({
            id: "Villian",
            range:[],
            type:"range",
            removable:true,
            equity: {
                total:"0",
                win:"0",
                tie:"0"
            }
        });

        this.setState({players: newPlayers});
    }

    removePlayerHandler = (index) => {
        const newPlayers = [...this.state.players];
        newPlayers.splice(index, 1);

        this.setState({players: newPlayers});
    }

    render() {
        return (
            <div className="App">
                <Sidebar
                    players={this.state.players}
                    addPlayer={() => this.addPlayerHandler()}
                    removePlayer={(index) => this.removePlayerHandler(index)}
                />
                <div className="data-entry">
                    <div className="row">
                        <Board
                            board={this.state.board}
                            enterBoard={(event) => this.enterBoard(event)}
                            toggleBoard={this.toggleBoard}
                        >
                        </Board>
                    </div>
                    <div className="row player-section">
                        {this.state.players.map((player, index) =>{
                            return <div
                                className="col-xs-12 col-sm-6 col-md-6 col-lg-6"
                                key={player.id.concat(index)}>
                                <Player
                                    player={player}
                                    index={index}
                                    clearRange={() => this.clearRangeHandler(index)}
                                    selectRange={(handId) => this.selectRangeHandler(handId, index)}
                                    selectHand={(handId) => this.selectHandHandler(handId, index)}
                                    removePlayer={() => this.removePlayerHandler(index)}
                                    toggleType={() => this.toggleTypeHandler(index)}>
                                    {player.id}
                                </Player>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
