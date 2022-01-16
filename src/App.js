import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div class="app">
      
      <div class="song-info">
        <img
        class="albumImg"
          src="https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg"
          alt=""
        />
        <div>
          <h2 class="name">Quran</h2>
          <h3 class="song">Hakim Omari</h3>
        </div>
      </div>
      <div class="player-control">
        
        
        <i class="fas fa-play" id="play-pause"><FontAwesomeIcon icon={faPlay} /></i>
        <i class="fas fa-forward" id="forward"></i>

      </div>

    </div>
  );
}

export default App;
