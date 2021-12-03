import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

import ManagerDashboard from "../../Components/ManagerDashboard/ManagerDashboard";

function Manager() {
  return (
    <div>
      <ManagerDashboard />
     <div style={{height:"50vh"}}></div>
    </div>
  );
}

export default Manager;
