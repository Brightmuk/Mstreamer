import './css/App.css';
import Header from './components/Header';
import { createContext, useEffect, useState, } from 'react';
import Playlists from './components/Playlists';
import Player from './components/Player';
import Songs from './components/Songs';
import AppContext from './state';



function Home() {

  const [appState, setAppState] = useState({
    playing: false,
    currentTab: 'home',
    currentSong: {},
    currentPlaylist: {'name':'Love songs','img':'/images/playlists/cover1.jpg'}
  });
  const updateState = (newState) => {
    setAppState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  useEffect(()=>{
    fetch('http://localhost:4000/songs/')
    .then(response=>response.json())
    .then(result=> {
        
        if(result.type==='success'){
            console.log('good good')
            
        }else{ 
            console.log(result)
            
        }
    })
    .catch(error =>console.error(error))
  },[])

  
  return (
   <AppContext.Provider value = {{appState, updateState}}>
    <div className='container'>
      <div className='row'>
      <div className='sidebar'>
        <Header/>
        <Playlists/>
      </div>
      <Songs/>
      </div>
      <Player/>
    </div>
    </AppContext.Provider>
   
  );
}

export default Home;

