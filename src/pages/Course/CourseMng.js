import { Link } from "react-router-dom";


import './CourseMng.css';
import { NavDropdown } from 'react-bootstrap';

function CourseMng(){

    return(
        <>
         <div className="dashboard">
            <div className="dashboarditem">Dashboard</div>
            <div classname="dashboarditem">
            <div className="item">
                        <NavDropdown title="Course" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link to="/admin/course">Course Management</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to="/admin/course-enquiry">Course Enquiry Management</Link></NavDropdown.Item>
                        </NavDropdown>
                    </div>
            <div className="item">
            <NavDropdown title="Resource" id="basic-nav-dropdown"> 
            <NavDropdown.Item >  < Link to="/admin/resource">Resource Management</Link></NavDropdown.Item>
                            <NavDropdown.Item >Resource Enquiry Management</NavDropdown.Item>
                            </NavDropdown>
            </div> 

            
            </div>
        </div>
        <Link to="/admin/course/add-course">Add Course</Link>
        <Link to="/admin/course/delete-course">Delete Course</Link>
        <Link to="/admin/course/view-courses">View Course</Link>
        <Link to="/admin/course/edit-course">Edit Course</Link>
        </>
    )
}




export default CourseMng;