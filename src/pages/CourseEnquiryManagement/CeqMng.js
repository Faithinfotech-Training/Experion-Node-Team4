import { Link } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";

import "./CeqMng.css";
import { NavDropdown } from "react-bootstrap";

function CeqMng() {
  return (
    <>
      <Dashboard />

      {/* <Link to="/admin/course-enquiry/view-course-enquiry">View Course Enquiries</Link> */}
      {/* <Link to="/admin/course-enquiry/edit-course-enquiry">Edit Course Enquiries</Link>
            <Link to="/admin/course-enquiry/delete-course-enquiry">Delete Course Enquiries</Link> */}
      <div class="container">
        <div class="row">
          <div class="col m-5 text-center">
            {" "}
            <Link to="/admin/course-enquiry/view-course-enquiry">
              <div class="col btn btn-primary">View Course Enquiries</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CeqMng;
