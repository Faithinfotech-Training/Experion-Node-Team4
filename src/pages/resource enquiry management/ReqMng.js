import { Link } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";

import './ReqMng.css';

function ReqMng() {

    return (
        <>
            <Dashboard />

            <Link to="/admin/resource-enquiry/view-resource-enquiry">View Resource Enquiries</Link>
            {/* <Link to="/admin/resource-enquiry/edit-resource-enquiry">Edit Resource Enquiries</Link> */}
            {/* <Link to="/admin/resource-enquiry/delete-resource-enquiry">Delete Resource Enquiries</Link> */}
        </>
    )
}




export default ReqMng;