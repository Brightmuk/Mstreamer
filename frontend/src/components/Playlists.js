import '../css/Playlists.css';
import '../css/App.css';
import { useContext, useState } from 'react';
import AppContext from '../state';

function Playlists(){
    const playlists = [{'name':'Worship Songs','img':'/images/playlists/cover0.jpg'},{'name':'Sleep','img':'/images/playlists/cover1.jpg'},{'name':'Amapiano','img':'/images/playlists/cover2.jpg'},{'name':'Love songs','img':'/images/playlists/cover3.jpeg'},{'name':'Travel Songs','img':'/images/playlists/cover5.jpeg'},{'name':'Vibing chills','img':'/images/playlists/cover6.jpg'},{'name':'Praise songs','img':'/images/playlists/cover7.jpeg'},{'name':'Rap songs','img':'/images/playlists/cover8.jpg'},];
   

    return (
        <div className="playlists">
            <div className='head'>
            <h3>Playlists</h3>
            </div>
            <div className='content'>
            <ItemList playlists = {playlists} onSelect = {(index)=>console.log('Playlist '+index +' selected')}/>
            </div>
           
        </div>
    )
}

export default Playlists;

function ItemList(props){
    const {appState, updateState} = useContext(AppContext);

    return (
        <div>
        {props.playlists.map((playlist, index) => (
            <div key={index} className={appState.currentPlaylist.name === playlist.name ? "selected playlist-card" : "playlist-card"}
                onClick={() => updateState({currentPlaylist:playlist})}>
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