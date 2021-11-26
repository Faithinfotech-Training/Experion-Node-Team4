
import { Link } from "react-router-dom";
function ResourceMng(){

    return(
        <>
        <Link to="/admin/course/add-resource">Add Resource</Link>
        <Link to="/admin/course/delete-resource">Delete Resource</Link>
        <Link to="/admin/course/view-resource">View Resource</Link>
        </>
    )
}




export default ResourceMng;