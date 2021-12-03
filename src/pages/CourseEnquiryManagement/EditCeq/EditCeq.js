import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";


import Dashboard from "../../../Components/Dashboard/Dashboard";



function EditCeq() {



  let navigate = useNavigate();
  const mytoken = localStorage.getItem('mytoken');
  const { id } = useParams();
  const goBack = () => {
    navigate('/admin/course-enquiry')
  }

  const [userstatus, setUserstatus] = useState()


  //handle the change of form elements
  function handleChange(event) {
    //saving the name of element and its value
    const value = event.target.value;

    //updating the values into the state
    setUserstatus(value)
  }

  useEffect(() => {
    var config = {
      method: 'get',
      url: `http://localhost:3009/course-enquiries/${id}`,
      headers: { 
        'Authorization': `Bearer ${mytoken}`, 
        'Content-Type': 'application/json'
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
     
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }, [])
  function handleSubmit(e) {
    e.preventDefault();
    console.log(userstatus);
    var datas = JSON.stringify({
      "userstatus": userstatus
    });
    var config = {
      method: 'put',
      url: `http://localhost:3009/course-enquiries/${id}`,
      headers: { 
        'Authorization': `Bearer ${mytoken}`, 
        'Content-Type': 'application/json'
      },
      data: datas
    };

    axios(config)
      .then((response) => {
        console.log(response);
        alert("Status Updated");
        goBack();
      })
      .catch((error) => {
        console.log(error);
        alert("Status not updated")
      })

  }



  return (
    <div>
      <Dashboard />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Update Status</Form.Label>

          <Form.Select name="userstatus" aria-label="Default select example" defaultValue={userstatus} value={userstatus || ""} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="Interested">Interested</option>
            <option value="Payment Pending">Payment Pending</option>
            <option value="Purchased">Purchased</option>
            <option value="Rejected">Rejected</option>
          </Form.Select>
        </Form.Group>

        <Button variant="success" type="submit">Update Status</Button>
      </Form>

    </div>
  )
}

export default EditCeq;