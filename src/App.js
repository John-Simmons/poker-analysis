import React, { Component } from 'react';
import './App.css';
import './RangeBtn/RangeBtn.css'
import './RangeTable/RangeTable.css'
import RangeTable from "./RangeTable/RangeTable"

class App extends Component {
    state = {
        range: []
    }

    render() {
        return (
            <div className="App">
                <RangeTable/>
            </div>
        );
    }
}

export default App;
