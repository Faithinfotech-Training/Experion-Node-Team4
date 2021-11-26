import {Link} from "react-router-dom";

import "./Admin.css";



function Admin(){

    return(
        <div>
        <div className="dashboard">
            <div className="dashboarditem">Dashboard</div>
            <div classname="dashboarditem">
            <div className="item"><Link to="/admin/course">Course</Link></div>
            <div className="item"><Link to="/admin/resourseview">Resource</Link></div>

            
            </div>
        </div>
        </div>
    )
}


export default Admin;