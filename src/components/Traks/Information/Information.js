import React from "react";

const Information = ({currentSongIndex, traks}) => (
    <div className="song-info">
        <img
            className="albumImg"
            src = {traks[currentSongIndex].images}
            alt= {traks[currentSongIndex].subtitle}
        />
        <div>
            <h2 className="name">{traks[currentSongIndex].title}</h2>
            <h3 className="song">{traks[currentSongIndex].subtitle}</h3>
        </div>
    </div>);



export default Information;
