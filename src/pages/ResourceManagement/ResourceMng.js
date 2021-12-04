import { Link } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";

import { NavDropdown } from "react-bootstrap";

import "./ResourceMng.css";

function ResourceMng() {
  return (
    <>
      <Dashboard />
      {/* <Link >Add Resource</Link>
      <Link to="/admin/resource/delete-resource">Delete Resource</Link>
      <Link>View Resource</Link>
      <Link to="/admin/resource/edit-resource">Edit Resource</Link> */}

      <div class="container">
        <div class="row">
          <div class="col m-5 text-center">
            {" "}
            <Link to="/admin/resource/add-resource">
              <div class="col btn btn-primary">Add Resource </div>
            </Link>
          </div>
          <div class="col m-5 text-center ">
            <Link to="/admin/resource/view-resources">
              <div class="col btn btn-primary ">View Resource </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResourceMng;
