import ManagerDashboard from "../../Components/ManagerDashboard/ManagerDashboard";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function ViewCourseEnquiry() {
  const [courseEnquiries, setcourseEnquiries] = useState([]);
  const mytoken = localStorage.getItem('mytoken');

  useEffect(() => {
    console.log("The use effect hook has been executed");
    var config = {
      method: 'get',
      url: 'http://localhost:3009/course-enquiries',
      headers: {
        'Authorization': `Bearer ${mytoken}`,
        'Content-Type': 'application/json'
      }
    }

    axios(config).then((response) => {
      console.log("Promise fulfilled");
      console.log(response);

      setcourseEnquiries(response.data);
    });
  }, []);

  return (
    <>
      <ManagerDashboard />
      <div className="mainBody">
        <h4>Course enquiries List</h4>
        <Table striped bordered hover>
          <tr>
            {/* <th>id</th> */}
            <th>Course Name</th>
            <th>Details</th>

          </tr>
          {courseEnquiries.map((courseEnquirie) => (

            <tr>
              <td> {courseEnquirie.name}</td>
              <td>   {courseEnquirie.email}</td>


              <td> <Link to={`${courseEnquirie.id}`}>View Enquiree Details</Link> </td>

            </tr>
          ))}
        </Table>
      </div>
    </>
  );
}

export default ViewCourseEnquiry;
