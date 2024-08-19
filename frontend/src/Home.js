import './App.css';
import Header from './Header';
import SelectedCourses from './SelectedCourses';
import AvailableCourses from './AvailableCourses';
import { useEffect, useState, } from 'react';



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
      <Header />
      <div className='text-center error'>{error}</div>
      <div className='content'>
        
        <AvailableCourses courses={courses} selected={selected} onSelect={setSelected}/>
        <div className='button-column'>
          <button onClick={()=>addCourse(courses.at(selected))}>Add</button>
          
          <button onClick={()=>removeCourse(chosenSelected)}>Remove</button>
        </div>
        
        <SelectedCourses courses={chosenCourses} selected={chosenSelected} onSelect={chosenSetSelected}/>

      </div>
    </div>
   
  );
}

export default Home;
