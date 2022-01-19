import React, {Component} from "react";
import "./App.css";
import Traks from "./components/Traks/trak";
import {traks} from "./constants/tracks";

class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            "currentSongIndex": 0
        };

    }

    setCurrentSongIndex = (trackId) => this.setState({"currentSongIndex": trackId});

    render () {

        return (
            <div className="warapper">
                <Traks
                    currentSongIndex={this.state.currentSongIndex}
                    setCurrentSongIndex={this.setCurrentSongIndex}
                    traks={traks}
                />
            </div>
        );

    }

}

export default App;
