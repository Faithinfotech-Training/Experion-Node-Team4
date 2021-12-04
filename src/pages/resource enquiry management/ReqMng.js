import { Link } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";

import "./ReqMng.css";

function ReqMng() {
  return (
    <>
      <Dashboard />

      {/* <Link to="/admin/resource-enquiry/edit-resource-enquiry">Edit Resource Enquiries</Link> */}
      {/* <Link to="/admin/resource-enquiry/delete-resource-enquiry">Delete Resource Enquiries</Link> */}

      <div class="container">
        <div class="row">
          <div class="col m-5 text-center">
            {" "}
            <Link to="/admin/resource-enquiry/view-resource-enquiry">
              <div class="col btn btn-primary"> View Resource Enquiries </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReqMng;
