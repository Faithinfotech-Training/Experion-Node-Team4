// import Dashboard from "../../Components/Dashboard/Dashboard";
import ManagerDashboard from "../../Components/ManagerDashboard/ManagerDashboard";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Table, Button } from "react-bootstrap";

function ManagerViewCourseEnquiryDetails() {
  const [inputs, setInputs] = useState({});
  const { id } = useParams();
  const mytoken = localStorage.getItem('mytoken');

  const navigate = useNavigate();
  const goBack = () => {
      navigate('/manager/view-course-enquiry')
  }

  useEffect(() => {
    var config = {
      method: 'get',
      url: `http://localhost:3009/course-enquiries/${id}`,
      headers: { 
        'Authorization': `Bearer ${mytoken}`, 
        'Content-Type': 'application/json'
      }
    }
    axios(config)
      .then((response) => {
        console.log(response.data);
        setInputs(response.data);
      });
  }, []);

  return (
    <>
      <ManagerDashboard />
      <div className="resource-list">
      <center>   <h4>Course enquiry Details</h4> </center>
     
      <Table striped bordered>
      <thead>
      <tr>
   
                            <th> Enquirer Name</th>
                            <th> Enquirer Email</th>
                            <th> Enquired Course</th>
                            <th>Enquiree Status</th>
                        </tr></thead>
     
     <tbody>
       <tr>
      <td>{inputs.name}</td>
      <td> {inputs.email}</td>
      <td> {inputs.courseName}</td>
      <td>{inputs.userstatus}</td>
      </tr>
    </tbody>

    </Table>
    <Button className="right" variant="primary" type="reset" onClick={() => goBack()}>
                    Go Back
                </Button>
    </div>

    </>
  );
}

export default ManagerViewCourseEnquiryDetails;
