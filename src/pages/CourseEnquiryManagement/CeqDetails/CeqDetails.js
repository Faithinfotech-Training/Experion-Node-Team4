import Dashboard from "../../../Components/Dashboard/Dashboard";
import './CeqDetails.css';

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { Form, Button } from "react-bootstrap";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Table } from "react-bootstrap";
function CeqDetails() {

  const [inputs, setInputs] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const mytoken = localStorage.getItem('mytoken');

  //Delete course option
  const deleteCourseEnquiree = () => {

    var config = {
      method: 'delete',
      url: `http://localhost:3009/course-enquiries/${id}`,
      headers: {
        'Authorization': `Bearer ${mytoken}`,
        'Content-Type': 'application/json'
      }
    };

    axios
      (config)
      .then((response) => {
        // toast.success("Deleted Successfully", {
        //     transition: Slide,
        //     hideProgressBar: true,
        //     autoClose: 3000
        //   })
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })

  }

  useEffect(() => {
    const config = {
      method: 'get',
      url: `http://localhost:3009/course-enquiries/${id}`,
      headers: {
        'Authorization': `Bearer ${mytoken}`,
        'Content-Type': 'application/json'

      }

    }
    axios(config)
      .then(response => {

        console.log(response.data);
        setInputs(response.data);
      })
  }, [])



  return (
    <>
      <Dashboard />
      <div><center>
        <h3>Course Enquiree Details</h3>
        <div className="details-table">
        <Table striped bordered>
         
          <thead>
            <tr>

              <th> Name</th>
              <th> Email</th>
              <th>Course</th>
              <th>Status</th>
            </tr></thead><tbody>

            <tr>
              <td>{inputs.name}</td>
              <td>{inputs.email}</td>
              <td>{inputs.courseName}</td>
              <td>{inputs.userstatus}</td>
              <td>  <Button onClick={() => navigate(`/admin/course-enquiry/edit-course-enquiry/${id}`)} variant="success">Update Status</Button>
                &nbsp;&nbsp;&nbsp;</td>
              {/* <td>  <Button onClick={()=> {deleteCourseEnquiree(); navigate('admin/course-enquiry')}} variant="danger">Delete</Button>
       
       </td>  */}
            </tr>
          </tbody>
        </Table>
        </div>
      </center></div>
    </>
  )
}

export default CeqDetails;