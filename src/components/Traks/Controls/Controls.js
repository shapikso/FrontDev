import React from "react";

const Controls = ({handleBackButton, playSong, skipSong, isPlaying}) =>
    ( <div className="player-control">
        <i onClick={handleBackButton} className="fas fa-backward"> </i>
        <i onClick={playSong} className={isPlaying
            ? "fas fa-pause"
            : "fas fa-play"}> </i>
        <i onClick={skipSong} className="fas fa-forward"> </i>
    </div>
    );

export default Controls;
