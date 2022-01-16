import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faForward, faBackward, faStop } from '@fortawesome/free-solid-svg-icons'

function Traks(props) {
    let [playBtn, setButton] = React.useState(<FontAwesomeIcon icon={faPlay} />);
    const [music] = React.useState(new Audio(props.traks[props.currentSongIndex].uri)) ;
    //const music = new Audio(props.traks[props.currentSongIndex].uri);

    const playMusic = () => {
        music.src = props.traks[props.currentSongIndex].uri;
        music.play();
    }
    const stopMusic = () => {
        music.pause()
    }
    const playSong = () => {
        if(playBtn.props.icon.iconName === 'play'){
            setButton(
                playBtn = <FontAwesomeIcon icon={faStop} />
            );
            playMusic();
        } else {
            setButton(
            playBtn = <FontAwesomeIcon icon={faPlay} />
        );
            stopMusic();
        }
    }
  const SkipSong = (forwards = true) => {
    if (forwards) {
        props.setCurrentSongIndex(() => {
            let temp = props.currentSongIndex;
            temp++;

            if (temp > props.traks.length - 1) {
                temp = 0;
            }
            return temp;
        });
    } else {
        props.setCurrentSongIndex(() => {
            let temp = props.currentSongIndex;
            temp--;

            if (temp < 0) {
                temp = props.traks.length - 1;
            }
            return temp;
        });
    }
}
  return (
    <div className="app">
      
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
      <div className="player-control">
        <button className='player-control' onClick={() => {
            stopMusic();
            SkipSong(false)
        }}><FontAwesomeIcon icon = {faBackward} /></button>
        <button className='player-control' onClick={playSong}>{playBtn}</button>
        <button className='player-control' onClick={() =>{ 
            stopMusic();
            SkipSong();
         }}><FontAwesomeIcon icon={faForward} /></button>
      </div>

    </div>
  );
}

export default Traks;
