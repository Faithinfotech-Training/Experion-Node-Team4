import { Link } from "react-router-dom";


import './ResourceMng.css';

function ResourceMng(){

    return(
        <>
        <Link to="/admin/resource/add-resource">Add Resource</Link>
        <Link to="/admin/resource/delete-resource">Delete Resources</Link>
        <Link to="/admin/resource/view-resources">View Resources</Link>
        <Link to="/admin/resource/edit-resource">Edit Resources</Link>
        </>
    )
}




export default ResourceMng;