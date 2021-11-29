import { Link } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';

import "./Admin.css";



function Admin() {

    return (
        <div>
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
                            <NavDropdown.Item > < Link to="/admin/resource">Resource Management</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to="/admin/resource-enquiry">Resource Enquiry Management</Link></NavDropdown.Item>
                        </NavDropdown>
                    </div>


                </div>
            </div>
        </div>
    )
}


export default Admin;