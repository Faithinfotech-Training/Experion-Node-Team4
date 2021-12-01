import { Link } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";

import { NavDropdown } from 'react-bootstrap';

import './ResourceMng.css';

function ResourceMng() {

    return (
        <>
            <Dashboard />
            <Link to="/admin/resource/add-resource">Add Resource</Link>
            {/* <Link to="/admin/resource/delete-resource">Delete Resource</Link> */}
            <Link to="/admin/resource/view-resources">View Resource</Link>
            {/* <Link to="/admin/resource/edit-resource">Edit Resource</Link> */}
        </>
    )
}




export default ResourceMng;
