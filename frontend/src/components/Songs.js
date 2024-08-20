import '../css/App.css';
import '../css/Songs.css';

function Songs() {
    const songs = [
    { 'name': 'Important', 'artist': 'Marizu', 'album': 'Important', 'duration': '2:44', 'img': '/images/playlists/cover1.jpg' },
    { 'name': 'Important', 'artist': 'Marizu', 'album': 'Important', 'duration': '2:44', 'img': '/images/playlists/cover3.jpeg' },
    { 'name': 'Important', 'artist': 'Marizu', 'album': 'Important', 'duration': '2:44', 'img': '/images/playlists/cover5.jpeg' },
    { 'name': 'Important', 'artist': 'Marizu', 'album': 'Important', 'duration': '2:44', 'img': '/images/playlists/cover6.jpg' },
    { 'name': 'Important', 'artist': 'Marizu', 'album': 'Important', 'duration': '2:44', 'img': '/images/playlists/cover7.jpeg' },
    { 'name': 'Important', 'artist': 'Marizu', 'album': 'Important', 'duration': '2:44', 'img': '/images/playlists/cover1.jpg' },
    { 'name': 'Important', 'artist': 'Marizu', 'album': 'Important', 'duration': '2:44', 'img': '/images/playlists/cover3.jpeg' },
    { 'name': 'Important', 'artist': 'Marizu', 'album': 'Important', 'duration': '2:44', 'img': '/images/playlists/cover7.jpeg' },
    { 'name': 'Important', 'artist': 'Marizu', 'album': 'Important', 'duration': '2:44', 'img': '/images/playlists/cover7.jpeg' },
    { 'name': 'Important', 'artist': 'Marizu', 'album': 'Important', 'duration': '2:44', 'img': '/images/playlists/cover1.jpg' },
    { 'name': 'Important', 'artist': 'Marizu', 'album': 'Important', 'duration': '2:44', 'img': '/images/playlists/cover3.jpeg' },
    { 'name': 'Important', 'artist': 'Marizu', 'album': 'Important', 'duration': '2:44', 'img': '/images/playlists/cover7.jpeg' },
    ]

    return (
        <div className="songs">
            <div className='songs-header'>
            <div className='background-overlay' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/playlists/cover6.jpg)`}}></div>
            <div className='blur-overlay'></div>
                <div className='nav'>

                </div>
                <div className='playlist-info'>
                    <img src={`${process.env.PUBLIC_URL}/images/playlists/cover6.jpg`}></img>
                    <div className='playlist-info-right'>
                        <small>Playlist</small>
                        <h1> Important Radio</h1>
                        <p>by Amichael Genre, Dj Homu</p>
                        <small>50 songs, 2hrs 30 min</small>
                    </div>
                </div>
            </div>
            <div className='songs-content'>
                <div className='songs-content-header'>

                </div>
                <div className='song-list'> 
                  <ItemList songs={songs} selected={()=>console.log('selected')}/>
                </div>
            </div>
        </div>
    )
}
function ItemList(props){
    return (
        <div>
        {props.songs.map((song, index) => (
            <div key={index} className={props.selected === index ? "selected-song-card" : "song-card"}
                onClick={() => props.onSelect(index)}>
                    <div className='card-left'>
                    <img src={`${process.env.PUBLIC_URL}${song.img}`} alt="img" />
                    <img className='play-icon' src={`${process.env.PUBLIC_URL}/images/icons/play.png`} alt="img" />
                    </div>
                    <div className='card-right'>
                        <div className='card-right-leading'>
                        <p>{song.name} </p>
                        <small>{song.artist}</small>
                        </div>
                        <div className='card-right-trailing'>
                            <p>{song.album}</p>
                            <p>{song.duration}</p>
                        </div>
                    
                    </div>
                
                
            </div>
        ))}
    </div>
    )
}

export default Songs;
