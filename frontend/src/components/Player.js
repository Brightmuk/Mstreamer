import { useContext, useEffect, useRef, useState } from 'react';
import '../css/App.css';
import '../css/Player.css';
import AppContext from '../state';

function Player(props) {
    const { appState, updateState } = useContext(AppContext);
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.load();
            audioRef.current.play();
        }
    };
    const pauseAudio = () => {
        audioRef.current.pause();
        updateState({ playing: false })
    }
    const resumeAudio = () => {
        audioRef.current.play();
        updateState({ playing: true })
    }

    useEffect(() => {
        if (appState.playing) {
            playAudio()
        }
        const audio = audioRef.current;
        // Update duration when metadata is loaded
        if(audio){
            const onLoadedMetadata = () => {
                setDuration(audio.duration);
            };
    
            // Update current time as the audio plays
            const onTimeUpdate = () => {
                setCurrentTime(audio.currentTime);
            };
    
            audio.addEventListener('loadedmetadata', onLoadedMetadata);
            audio.addEventListener('timeupdate', onTimeUpdate);
    
            // Cleanup event listeners
            return () => {
                audio.removeEventListener('loadedmetadata', onLoadedMetadata);
                audio.removeEventListener('timeupdate', onTimeUpdate);
            };
        }
  

    }, [appState.currentSong])
    // Format time in mm:ss
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // Update current time when progress bar is changed
    const handleProgressChange = (event) => {
        const newTime = event.target.value;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };
    return (
        <div className={appState.currentSong.name == null ? "no-song player" : "player"}>
            {appState.currentSong.name != null ?
                <>
                    <div className='player-left'>
                        <div className='card-left'>
                            <img src={appState.currentSong.img} alt="img" />

                        </div>
                        <div className='card-right'>
                            <p>{appState.currentSong.name} </p>
                            <small>{appState.currentSong.by}</small>
                        </div>
                    </div>
                    <audio ref={audioRef} >
                        <source src={appState.currentSong.audio} type="audio/mp3" />
                    </audio>
                    <div className='player-center'>
                        <div className='play-center-top'>
                            <img src={`${process.env.PUBLIC_URL}/images/icons/shuffle.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/images/icons/back.png`}></img>
                            {appState.playing ?
                                <img onClick={() => pauseAudio()} src={`${process.env.PUBLIC_URL}/images/icons/pause.png`}></img> :
                                <img onClick={() => resumeAudio()} src={`${process.env.PUBLIC_URL}/images/icons/play.png`}></img>
                            }

                            <img src={`${process.env.PUBLIC_URL}/images/icons/skip.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/images/icons/repeat.png`}></img>
                        </div>
                        <div className='play-center-bottom'>
                        
                                <span className='time'>{formatTime(currentTime)}</span>
                                <div className="progress-bar">
                                <input
                                    type="range"
                                    value={currentTime}
                                    max={duration}
                                    onChange={handleProgressChange}
                                />
                                <div
                                    className="progress-fill"
                                    style={{ width: `${(currentTime / duration) * 100}%` }}
                                ></div>
                                </div>
                                <span className='time'>{formatTime(duration)}</span>
                            
                        </div>
                    </div>
                    <div className='player-right'>
                        <img src={`${process.env.PUBLIC_URL}/images/icons/volume.png`}></img>
                        <div className="progress-bar" onClick={() => console.log('seeking')}>
                            <div
                                className="progress"
                                style={{ width: 50 }}
                            ></div>
                        </div>

                        <div className='volume'>30%</div>
                    </div>
                </> : <></>
            }


        </div>
    )
}

export default Player;