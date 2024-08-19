import { useContext } from "react";
import { UserContext } from "./App";

function CourseList(props) {
    
    return (
        <div>
            {props.courses.map((course, index) => (
                <div key={index} className={props.selected === index ? "selected-course-card" : "course-card"}
                    onClick={() => props.onSelect(index)}>
                    <p>{index + 1}. {course.name}</p>
                    <small>Credits {course.credits}</small>
                </div>
            ))}
        </div>
    )
}

export default CourseList;