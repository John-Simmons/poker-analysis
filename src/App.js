import React, { Component } from 'react';
import './App.css';
import './RangeBtn/RangeBtn.css'
import './RangeTable/RangeTable.css'
import RangeTable from "./RangeTable/RangeTable"

class App extends Component {
    state = {
        range: []
    }

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

    render() {
        return (
            <div className="App">
                <RangeTable
                    range={this.state.range}
                    selectHand={(id) => this.selectHandHandler(id)}
                />
            </div>
        );
    }
}

export default App;
