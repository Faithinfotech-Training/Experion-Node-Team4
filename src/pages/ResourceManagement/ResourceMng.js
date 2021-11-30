import { Link } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';

import './ResourceMng.css';

function ResourceMng(){

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
        <Link to="/admin/resource/add-resource">Add Resource</Link>
        <Link to="/admin/resource/view-resources">Delete Resources</Link>
        <Link to="/admin/resource/view-resources">View Resources</Link>
        {/* <Link to="/admin/resource/edit-resource">Edit Resources</Link> */}
        </>
    )
}




export default ResourceMng;