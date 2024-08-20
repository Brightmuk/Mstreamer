import '../css/App.css';
import '../css/Player.css';

function Player(props) {

    return (
        <div className="player">
            <div className='player-left'>
                <div className='card-left'>
                    <img src={`${process.env.PUBLIC_URL}/images/playlists/cover1.jpg`} alt="img" />

                </div>
                <div className='card-right'>
                    <p>Love You </p>
                    <small>James coden</small>
                </div>
            </div>
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
                    <div className='time'>2:34</div>
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

        </div>
    )
}

export default Player;