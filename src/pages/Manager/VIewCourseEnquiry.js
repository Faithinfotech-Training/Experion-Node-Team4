import ManagerDashboard from "../../Components/ManagerDashboard/ManagerDashboard";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";

function ViewCourseEnquiry() {
  const [courseEnquiries, setcourseEnquiries] = useState([]);
  const mytoken = localStorage.getItem('mytoken');

  const navigate = useNavigate();
  const goBack = () => {
      navigate('/manager')
  }


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
            <th>Email</th>
            <th>Details</th>

          </tr>
          {courseEnquiries.map((courseEnquirie) => (

            <tr>
              <td> {courseEnquirie.courseName}</td>
              <td>   {courseEnquirie.email}</td>


              <td> <Link to={`${courseEnquirie.id}`}>View Enquiree Details</Link> </td>

            </tr>
          ))}
        </Table>
                <Button className="right" variant="primary" type="reset" onClick={() => goBack()}>
                    Go Back
                </Button>
      </div>
    </>
  );
}

export default ViewCourseEnquiry;
