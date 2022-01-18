import React, {Component} from 'react';
import Information from "./Information/Information";
import Controls from "./Controls/Controls";

class Traks extends Component {
    constructor(props) {
        super(props);
        this.audioEl = React.createRef();
        this.state = {
            isPlaying: false
        }
    }

    playOrStop = async () => this.state.isPlaying ? this.audioEl.current.play() : this.audioEl.current.pause();
    playSong = () => this.setState({ isPlaying: !this.state.isPlaying }, this.playOrStop);

    componentDidUpdate() {
        this.playOrStop();
    }

    skipSong = (forwards = true) => {
        if (forwards) {
            (this.props.currentSongIndex + 1 > this.props.traks.length - 1)
                ? this.props.setCurrentSongIndex(0)
                : this.props.setCurrentSongIndex((this.props.currentSongIndex + 1))
        } else {
            (this.props.currentSongIndex - 1 < 0)
                ? this.props.setCurrentSongIndex(this.props.traks.length - 1)
                : this.props.setCurrentSongIndex(this.props.currentSongIndex - 1)
        }
    }
    handleBackButton = () => {
        this.skipSong(false)
    }
    render() {
        return (
            <div className="app">
                <Information {...this.props} />
                <audio
                    src={this.props.traks[this.props.currentSongIndex].uri}
                    ref={this.audioEl}>
                </audio>
                <Controls playSong={this.playSong}
                          handleBackButton={this.handleBackButton}
                          skipSong={this.skipSong}
                          isPlaying={this.state.isPlaying} />
            </div>
        );
    }
}

export default Traks;
