import React from "react";

const Information = ({currentSongIndex, traks, animateClass}) => {
    //console.log(animateClass);
    setTimeout(()=>{
        animateClass = false;
    },1000);
    return(
        <div className="song-info">
            <img
                className={animateClass ? "albumImg show": "albumImg" }
                src = {traks[currentSongIndex].images}
                alt= {traks[currentSongIndex].subtitle}
                show
            />
            <div>
                <h2 className={animateClass ? "name flyRight": "name" }>{traks[currentSongIndex].title}</h2>
                <h3 className={animateClass ? "name flyLeft": "song" }>{traks[currentSongIndex].subtitle}</h3>
            </div>
        </div>);
};



export default Information;
//flyRight flyLeft