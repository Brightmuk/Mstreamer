import { useContext } from "react";
import CourseList from "./CourseList";
import { UserContext } from "./App";

function AvailableCourses(props){
    const user = useContext(UserContext);
    return (
        <div className="course-container">
            <h3>Available Courses <br></br><small>for {user}</small></h3>
            
            <CourseList courses={props.courses} selected={props.selected} onSelect={props.onSelect}/>
        </div>
    );
}

export default AvailableCourses;