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
        ranges: [
            {id: "Hero", range: [], type: "range"},
            {id: "Villian 1", range: [], type: "range"}
        ]
    }

    //This function clears the range selected
    clearRangeHandler = (index) => {
        console.log("calling clearRangeHandler with", index)
        const newRanges = [...this.state.ranges]
        newRanges[index].range = [];
        this.setState({ranges: newRanges});
    }

    //This function add/subtracts from the range based on the user selection
    selectHandHandler = (handId, index) => {
        const newRanges = [...this.state.ranges]
        const range = [...this.state.ranges[index].range];

        if (range.includes(handId)){
            const handIndex = range.indexOf(handId);
            range.splice(handIndex, 1);
            newRanges[index].range = range;
            this.setState({ranges: newRanges});
        } else {
            newRanges[index].range.push(handId);

            this.setState({ranges: newRanges});
        }
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
                <div className="row no-gutters">
                    {this.state.ranges.map((entity, index) =>{
                        return <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <RangeSelector
                                range={entity.range}
                                entityId={entity.id}
                                index={index}
                                type={entity.type}
                                clearRange={() => this.clearRangeHandler(index)}
                                enterRange={(event) => this.enterRangeHandler(event)}
                                selectHand={(handId) => this.selectHandHandler(handId, index)}
                                key={entity.id}>
                                {entity.id}
                            </RangeSelector>
                        </div>
                    })}
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <AddSelector/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
