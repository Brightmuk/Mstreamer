import { useContext } from 'react';
import '../css/App.css';
import '../css/Header.css';
import AppContext from '../state';

function Header(){
    const {appState, updateState} = useContext(AppContext)
    return (
        <div className="header">
            <h2 className="text-center">MStreamer</h2>
            <h4 className={appState.currentTab==='home'?'selecte':'unselected'} onClick={()=>updateState({currentTab:'home'})}> <img src={`${process.env.PUBLIC_URL}/images/icons/home.png`}></img> Home</h4>
            <h4  className={appState.currentTab==='search'?'selecte':'unselected'} onClick={()=>updateState({currentTab:'search'})}> <img src={`${process.env.PUBLIC_URL}/images/icons/search.png`}></img> Search</h4>
        </div>
    )
}

export default Header;