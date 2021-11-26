import { Link } from "react-router-dom";


import './CourseMng.css';

function CourseMng(){

    return(
        <>
        <Link to="/admin/course/add-course">Add Course</Link>
        <Link to="/admin/course/delete-course">Delete Course</Link>
        <Link to="/admin/course/view-courses">View Course</Link>
        <Link to="/admin/course/edit-course">Edit Course</Link>
        </>
    )
}




export default CourseMng;