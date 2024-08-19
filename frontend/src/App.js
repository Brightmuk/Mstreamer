import './css/App.css';
import Home from './Home';
import { createContext, useEffect, useState } from 'react';
import LoginForm from './Login';
import Cookies from 'js-cookie';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState();
  useEffect(() => {

    const savedUser = Cookies.get('user');
    setUser(savedUser)
    console.log('User:', user);

  }, []);
  if(user==null){
    return (
      <LoginForm setUser = {setUser}/>
    );
  }else{
    return (
      <UserContext.Provider value={user}>
          <Home/>
      </UserContext.Provider>
     
    );
  }
 
}

export default App;
