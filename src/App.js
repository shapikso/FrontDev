import React, {Component} from 'react';
import './App.css';
import Traks from "./components/Traks/trak";
import {traks} from "./constants/constant";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSongIndex: 0,
            traks
        };
    }

    setCurrentSongIndex = (trackId) => this.setState({ currentSongIndex: trackId });

    render() {
        return (
            <div className = "warapper">
                <Traks traks={this.state.traks}  currentSongIndex={ this.state.currentSongIndex }
                       setCurrentSongIndex={this.setCurrentSongIndex}
                />
            </div>
        );
    }
}

export default App;
