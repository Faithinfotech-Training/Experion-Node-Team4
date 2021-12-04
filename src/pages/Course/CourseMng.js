import { Link } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";

import "./CourseMng.css";
import { NavDropdown } from "react-bootstrap";

function CourseMng() {
  return (
    <>
      <Dashboard />
      <div class="container">
        <div class="row">
          <div class="col m-5 text-center">
            {" "}
            <Link to="/admin/course/add-course">
              <div class="col btn btn-primary">View Course </div>
            </Link>
          </div>
          <div class="col m-5 text-center ">
            <Link to="/admin/course/view-courses">
              <div class="col btn btn-primary ">Add Course </div>
            </Link>
          </div>
        </div>
      </div>
      ; ;
    </>
  );
}

export default CourseMng;
