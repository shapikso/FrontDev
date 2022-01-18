import React from 'react';

function Information(props) {
    return (
        <div className="song-info">
            <img
                className="albumImg"
                src = {props.traks[props.currentSongIndex].images}
                alt=""
            />
            <div>
                <h2 className="name">{props.traks[props.currentSongIndex].title}</h2>
                <h3 className="song">{props.traks[props.currentSongIndex].subtitle}</h3>
            </div>
        </div>
    );
}

export default Information;