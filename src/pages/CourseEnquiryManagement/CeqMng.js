import { Link } from "react-router-dom";


import './CeqMng.css';
import { NavDropdown } from 'react-bootstrap';

function CeqMng(){

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
        
        <Link to="/admin/course-enquiry/view-course-enquiry">View Course Enquiries</Link>
        <Link to="/admin/course-enquiry/edit-course-enquiry">Edit Course Enquiries</Link>
        <Link to="/admin/course-enquiry/delete-course-enquiry">Delete Course Enquiries</Link>
        </>
    )
}




export default CeqMng;