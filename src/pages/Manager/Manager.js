import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

import "./Manager.css";

function Manager() {
  return (
    <div>
      <div className="dashboard">
        <div className="dashboarditem">Dashboard</div>
        <div classname="dashboarditem">
          <div className="item">
            <NavDropdown title="View" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/manager/view-course-enquiry">
                  {" "}
                  View Course Enquiry{" "}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/manager/view-resourse-enquiry">
                  View Resource Enquiry
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </div>

          <div className="item">
            <NavDropdown title="Sales Pipeline" id="basic-nav-dropdown">
              <NavDropdown.Item>
                {" "}
                <Link to="/manager/view-sales-pipeline">
                  View Sales Pipeline
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link to="/manager/view-site-visits">
                  View Table And Chart
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manager;
