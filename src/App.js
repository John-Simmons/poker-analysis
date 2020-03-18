import React, { Component } from 'react';
import './App.css';
import './RangeBtn/RangeBtn.css'
import './RangeTable/RangeTable.css'
import './RangeSelector/RangeSelector.css'
import './AddSelector/AddSelector.css'
import RangeSelector from "./RangeSelector/RangeSelector"
import AddSelector from "./AddSelector/AddSelector"

class App extends Component {
    state = {
        players: [
            {id: "Hero", range: [], type: "range"},
            {id: "Villian 1", range: [], type: "range"}
        ]
    }

    //This function clears the range selected
    clearRangeHandler = (index) => {
        const newPlayers = [...this.state.players]
        newPlayers[index].range = [];
        this.setState({players: newPlayers});
    }

    //This function add/subtracts from the range based on the user selection
    selectHandHandler = (handId, index) => {
        const newPlayers = [...this.state.players]
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
        const newPlayers = [...this.state.players]

        let newName = "Villian";
        newName = newName.concat(newPlayers.length.toString());

        newPlayers.push({id:newName, range:[], type:"range"});

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
                            key={player.id}>
                            <RangeSelector
                                range={player.range}
                                entityId={player.id}
                                index={index}
                                type={player.type}
                                clearRange={() => this.clearRangeHandler(index)}
                                enterRange={(event) => this.enterRangeHandler(event)}
                                selectHand={(handId) => this.selectHandHandler(handId, index)}>
                                {player.id}
                            </RangeSelector>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default App;
