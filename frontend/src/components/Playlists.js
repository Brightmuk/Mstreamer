import '../css/Playlists.css';
import '../css/App.css';

function Playlists(){

    return (
        <div className="playlists">
            <div className='head'>
            <h3>Playlists</h3>
            </div>
            <div className='content'>
            <ItemList playlists = {[{'name':'Love songs','img':'/images/playlists/cover1.jpg'},{'name':'Worship Songs','img':'/images/playlists/cover5.jpeg'},{'name':'Sleep','img':'/images/playlists/cover7.jpeg'},{'name':'Amapiano','img':'/images/playlists/cover3.jpeg'},{'name':'Love songs','img':'/images/playlists/cover1.jpg'},{'name':'Worship Songs','img':'/images/playlists/cover5.jpeg'},{'name':'Sleep','img':'/images/playlists/cover7.jpeg'},{'name':'Amapiano','img':'/images/playlists/cover3.jpeg'},{'name':'Sleep','img':'/images/playlists/cover7.jpeg'},]} onSelect = {(index)=>console.log('Playlist '+index +' selected')}/>
            </div>
           
        </div>
    )
}

export default Playlists;

function ItemList(props){
    return (
        <div>
        {props.playlists.map((playlist, index) => (
            <div key={index} className={props.selected === index ? "selected-playlist-card" : "playlist-card"}
                onClick={() => props.onSelect(index)}>
                    <div className='card-left'>
                    <img src={`${process.env.PUBLIC_URL}${playlist.img}`} alt="img" />
                    <img className='play-icon' src={`${process.env.PUBLIC_URL}/images/icons/play.png`} alt="img" />
                    </div>
                    <div className='card-right'>
                    <p>{playlist.name} </p>
                    <small>100 songs</small>
                    </div>
                
                
            </div>
        ))}
    </div>
    )
}