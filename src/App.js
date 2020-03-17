import React, { Component } from 'react';
import './App.css';
import './RangeBtn/RangeBtn.css'
import './RangeTable/RangeTable.css'
import './RangeSelector/RangeSelector.css'
import RangeSelector from "./RangeSelector/RangeSelector"

class App extends Component {
    state = {
        range: []
    }

    //This function clears the range selected
    clearRangeHandler = () => {
        this.setState({range: []});
    }

    //This function add/subtracts from the range based on the user selection
    selectHandHandler = (id) => {
        const newRange = [...this.state.range];

        if (this.state.range.includes(id)){
            const handIndex = this.state.range.indexOf(id);
            newRange.splice(handIndex, 1);
            this.setState({range: newRange});
        } else {
            newRange.push(id);

            this.setState({range: newRange});
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
                <RangeSelector
                    range={this.state.range}
                    clearRange={this.clearRangeHandler}
                    enterRange={(event) => this.enterRangeHandler(event)}
                    selectHand={(id) => this.selectHandHandler(id)}>
                    Hero
                </RangeSelector>
            </div>
        );
    }
}

export default App;
