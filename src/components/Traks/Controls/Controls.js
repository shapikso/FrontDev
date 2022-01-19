import React from "react";

function Controls ({handleBackButton, playSong, skipSong, isPlaying}) {

    return <div className="player-control">
        <i onClick={handleBackButton} className="fas fa-backward"> </i>
        <i onClick={playSong} className={isPlaying
            ? "fas fa-pause"
            : "fas fa-play"}> </i>
        <i onClick={skipSong} className="fas fa-forward"> </i>
    </div>;

}

export default Controls;
