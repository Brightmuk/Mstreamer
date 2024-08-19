import './css/App.css';
import Header from './components/Header';
import SelectedCourses from './SelectedCourses';
import AvailableCourses from './AvailableCourses';
import { useEffect, useState, } from 'react';
import Playlists from './components/Playlists';



function Home() {
  const [selected, setSelected] = useState();
  const [courses,setCourses] = useState([]);

  const [chosenSelected, chosenSetSelected] = useState();
  const [chosenCourses, setChosenCourses] = useState([]);

  const [error,setError] = useState();

  const addCourse = (course) => {
    setChosenCourses([...chosenCourses, course]);
  };
  const removeCourse = (indexToRemove) => {
    setChosenCourses(chosenCourses.filter((_, index) => index !== indexToRemove));
  };
  useEffect(()=>{
    fetch('http://localhost:4000/')
    .then(response=>response.json())
    .then(result=> {
        
        if(result.type==='success'){
            console.log('good good')
            setCourses(result.data);
        }else{ 
            console.log(result)
            setError(result.error)
            setCourses([]);
        }
    })
    .catch(error =>setError(error))
  },[])

  
  return (
   
    <div className='container'>
      <div className='row'>
      <div className='sidebar'>
        <Header/>
        <Playlists/>
      </div>
      <div className='songs'></div>
      </div>
      <div className='player'></div>
    </div>
    
   
  );
}

export default Home;
