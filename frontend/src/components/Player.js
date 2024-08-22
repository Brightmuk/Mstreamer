import { useContext, useEffect, useRef } from 'react';
import '../css/App.css';
import '../css/Player.css';
import AppContext from '../state';

function Player(props) {
    const { appState, updateState } = useContext(AppContext);
    const audioRef = useRef(null);
    
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };
    useEffect(()=>{ 
        playAudio()
    },[appState])

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
                        <source  src={appState.currentSong.audio} type="audio/mp3" />
                        </audio> 
                    <div className='player-center'>
                        <div className='play-center-top'>
                            <img src={`${process.env.PUBLIC_URL}/images/icons/shuffle.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/images/icons/back.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/images/icons/pause.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/images/icons/skip.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/images/icons/repeat.png`}></img>
                        </div>
                        <div className='play-center-bottom'>
                            <div className='time'>0:23</div>
                            <div className="progress-bar" onClick={() => console.log('seeking')}>
                                <div
                                    className="progress"
                                    style={{ width: 100 }}
                                ></div>
                            </div>
                            <div className='time'>{appState.currentSong.duration}</div>
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