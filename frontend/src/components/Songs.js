import { useContext, useEffect, useState, useRef } from 'react';
import '../css/App.css';
import '../css/Songs.css';
import AppContext from '../state';

function Songs() {
    const { appState, updateState } = useContext(AppContext);

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/songs/')
            .then(response => response.json())
            .then(result => {

                if (result.type === 'success') {
                    console.log('good good')
                    setSongs(result.data)
                } else {
                    console.log(result)

                }
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <div className="songs">
            <div className='songs-header'>
                <div className='background-overlay' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${appState.currentPlaylist.img})` }}></div>
                <div className='blur-overlay'></div>
                <div className='nav'>

                </div>
                <div className='playlist-info'>
                    <img className='album-img' src={`${process.env.PUBLIC_URL}${appState.currentPlaylist.img}`}></img>
                    <div className='playlist-info-right'>
                        <small>Playlist</small>
                        <h1> {appState.currentPlaylist.name}</h1>
                        <p>by Amichael Genre, Dj Homu</p>
                        <small>50 songs, 2hrs 30 min</small>
                    </div>

                    <div className='play-playlist'><img src={`${process.env.PUBLIC_URL}/images/icons/play.png`}></img></div>

                </div>
            </div>
            <div className='songs-content'>

                <div className='song-list'>
                    <ItemList songs={songs} selected={() => console.log('selected')} />
                </div>
            </div>
        </div>
    )
}
function ItemList(props) {
    const { appState, updateState } = useContext(AppContext);
    const audioRef = useRef(null);
    
  const playAudio = (song) => {
    if (audioRef.current) {
      audioRef.current.play();
      updateState({playing:true, currentSong: song});
    }
  };

    return (
        <div>
            {props.songs.map((song, index) => (
                <div key={index} className={props.selected === index ? "selected-song-card" : "song-card"}
                    onClick={() => playAudio(song)}>
                    <div className='card-left'>

                        <div className='card-left-leading'>{index + 1}</div>
                        <div className='card-left-trailing'>
                            <img src={song.img} alt="img" />
                            <img className='play-icon' src={`${process.env.PUBLIC_URL}/images/icons/play.png`} alt="img" />
                        </div>
                        <audio ref={audioRef} >
                        <source  src={song.audio} type="audio/mp3" />
                        </audio>

                    </div>
                    <div className='card-right'>
                        <div className='card-right-leading'>
                            <p>{song.name} </p>
                            <small>{song.by}</small>
                        </div>
                        <div className='card-right-trailing'>
                            <p>{song.album}</p>
                            <h5>{song.duration}</h5>
                        </div>

                    </div>


                </div>
            ))}
        </div>
    )
}

export default Songs;
