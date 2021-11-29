import { Link } from "react-router-dom";


import './CeqMng.css';

function CeqMng(){

    return(
        <>
        
        <Link to="/admin/course-enquiry/view-course-enquiry">View Course Enquiries</Link>
        <Link to="/admin/course-enquiry/edit-course-enquiry">Edit Course Enquiries</Link>
        <Link to="/admin/course-enquiry/delete-course-enquiry">Delete Course Enquiries</Link>
        </>
    )
}




export default CeqMng;