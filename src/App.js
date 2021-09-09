import React, {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Without Me",
      artist: "Halsey",
      img_src: "./images/withoutme.jpg",
      src: "./music/whitoutme.mp3"
    },
    {
      title: "Dive",
      artist: "Ed Sheeran",
      img_src: "./images/dive.jpg",
      src: "./music/dive.mp3"
    },
    {
      title: "Tudo que não for vida",
      artist: "Vanguart",
      img_src: "./images/tudoquenaoforvida.jpg",
      src: "./music/tudoquenaoforvida.mp3"
    },
    {
      title: "Feel the love",
      artist: "KIDS SEE GHOSTS",
      img_src: "./images/feelthelove.jpg",
      src: "./music/feelthelove.mp3"
    },
    {
      title: "Good 4 u",
      artist: "Olivia Rodrigo",
      img_src: "./images/good4u.jpg",
      src: "./music/good4u.mp3"
    },
    {
      title: "Levitating ft. DaBaby",
      artist: "Dua Lipa",
      img_src: "./images/levitating.jpg",
      src: "./music/levitating.mp3"
    },

  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;

