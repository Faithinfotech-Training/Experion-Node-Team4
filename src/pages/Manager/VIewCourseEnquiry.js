import ManagerDashboard from "../../Components/ManagerDashboard/ManagerDashboard";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ViewCourseEnquiry() {
  const [courseEnquiries, setcourseEnquiries] = useState([]);

  useEffect(() => {
    console.log("The use effect hook has been executed");

    axios.get("http://localhost:3009/course-enquiries").then((response) => {
      console.log("Promise fulfilled");
      console.log(response);

      setcourseEnquiries(response.data);
    });
  }, []);

  return (
    <>
      <ManagerDashboard />
      <div>
        <h1>Course enquiries List</h1>
        <div>
          {courseEnquiries.map((courseEnquirie) => (
            // <div key={staff.id} className="staffListLI">
            //     {/* <Staff details = {staff} /> */}
            // </div>
            <div>
              <div>{courseEnquirie.name}</div>
              <div>{courseEnquirie.email}</div>
              <div>
                <Link to={`${courseEnquirie.id}`}>View Enquiree Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ViewCourseEnquiry;
