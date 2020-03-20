import React, { Component } from 'react';
import './App.css';
import './Components/RangeBtn/RangeBtn.css'
import './Components/HandBtn/HandBtn.css'
import './Components/RangeTable/RangeTable.css'
import './Components/HandTable/HandTable.css'
import './Components/Player/Player.css'
import './Components/Board/Board.css'
import './Components/Sidebar/Sidebar.css'
import './Components/AddSelector/AddSelector.css'
import './Components/ToggleSelector/ToggleSelector.css'
import Player from "./Components/Player/Player"
import Board from "./Components/Board/Board"
import Sidebar from "./Components/Sidebar/Sidebar"

class App extends Component {
    state = {

        players: [
            {id: "Hero", range: [], type: "hand", removable: false},
            {id: "Villian", range: [], type: "range", removable: true}
        ],
        board: {
            flop: [
                {card: "", suit: ""},
                {card: "", suit: ""},
                {card: "", suit: ""}
            ],
            turn: {card:"", suit:""},
            river: {card:"", suit:""}
        }

    }

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

        console.log(newBoard);

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

    //This function Add/Subtracts from the range based on the user selection
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

    //This function clears the range selected
    clearRangeHandler = (index) => {
        const newPlayers = [...this.state.players];
        newPlayers[index].range = [];
        this.setState({players: newPlayers});
    }

    //This function add/subtracts from the range based on the user selection
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

        newPlayers.push({id: "Villian", range:[], type:"range", removable:true});

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
                    addPlayer={() => this.addPlayerHandler()}
                />
                <div className="data-entry">
                    <div className="row">
                        <Board
                            board={this.state.board}
                            enterBoard={(event) => this.enterBoard(event)}
                        >
                        </Board>
                    </div>
                    <div className="row">
                        {this.state.players.map((player, index) =>{
                            return <div
                                className="col-xs-12 col-sm-6 col-md-6 col-lg-6"
                                key={player.id.concat(index)}>
                                <Player
                                    player={player}
                                    index={index}
                                    clearRange={() => this.clearRangeHandler(index)}
                                    enterRange={(event) => this.enterRangeHandler(event)}
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
