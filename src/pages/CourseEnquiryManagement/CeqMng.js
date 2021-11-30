import { Link } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";

import './CeqMng.css';
import { NavDropdown } from 'react-bootstrap';

function CeqMng() {

    return (
        <>
            <Dashboard />

            <Link to="/admin/course-enquiry/view-course-enquiry">View Course Enquiries</Link>
            <Link to="/admin/course-enquiry/edit-course-enquiry">Edit Course Enquiries</Link>
            <Link to="/admin/course-enquiry/delete-course-enquiry">Delete Course Enquiries</Link>
        </>
    )
}




export default CeqMng;