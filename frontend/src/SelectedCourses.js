import CourseList from "./CourseList";

function SelectedCourses(props){
    return (
        <div className="course-container">
            <h3>Chosen Courses</h3>
            <CourseList courses={props.courses} selected={props.selected} onSelect={props.onSelect}/>
        </div>
    );
}
export default SelectedCourses;