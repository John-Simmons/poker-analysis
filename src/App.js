import React, { Component } from 'react';
import './App.css';
import './Components/RangeBtn/RangeBtn.css'
import './Components/HandBtn/HandBtn.css'
import './Components/RangeTable/RangeTable.css'
import './Components/HandTable/HandTable.css'
import './Components/Player/Player.css'
import './Components/AddSelector/AddSelector.css'
import './Components/ToggleSelector/ToggleSelector.css'
import Player from "./Components/Player/Player"
import AddSelector from "./Components/AddSelector/AddSelector"

class App extends Component {
    state = {
        players: [
            {id: "Hero", range: [], type: "hand", removable: false},
            {id: "Villian", range: [], type: "range", removable: true}
        ]
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

    //TO-DO: This function handles a input in the textbox
    enterRangeHandler = (event) => {
        //const range = [...this.state.range];

        const newRange = event.target.value.split(",");

        console.log(newRange);

    }

    render() {
        return (
            <div className="App">
                <div className="row">
                    <AddSelector
                        addPlayer={this.addPlayerHandler}>
                        Add Player
                    </AddSelector>
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
        );
    }
}

export default App;
