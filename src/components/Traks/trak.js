import React, {Component} from "react";
import Information from "./Information/Information";
import Controls from "./Controls/Controls";

class Traks extends Component {

    constructor (props) {

        super(props);
        this.audioEl = React.createRef();
        this.state = {
            "isPlaying": false
        };

    }

    playOrStop = () => this.state.isPlaying ? this.audioEl.current.play() : this.audioEl.current.pause();

    playSong = () => this.setState(
        {"isPlaying": !this.state.isPlaying},
        this.playOrStop
    );

    componentDidUpdate () {

        this.playOrStop();

    }

    skipSong = (forwards = true) => {

        const {setCurrentSongIndex, currentSongIndex, traks} = this.props;
        if (forwards) {

            currentSongIndex + 1 > traks.length - 1
                ? setCurrentSongIndex(0)
                : setCurrentSongIndex(currentSongIndex + 1);

        } else {

            currentSongIndex - 1 < 0
                ? setCurrentSongIndex(traks.length - 1)
                : setCurrentSongIndex(currentSongIndex - 1);

        }

    }

    handleBackButton = () => this.skipSong(false)

    render () {

        return (
            <div className="app">
                <Information {...this.props} />

                <audio
                    ref={this.audioEl}
                    src={this.props.traks[this.props.currentSongIndex].uri}
                />

                <Controls
                    handleBackButton={this.handleBackButton}
                    isPlaying={this.state.isPlaying}
                    playSong={this.playSong}
                    skipSong={this.skipSong}
                />
            </div>
        );

    }

}

export default Traks;
