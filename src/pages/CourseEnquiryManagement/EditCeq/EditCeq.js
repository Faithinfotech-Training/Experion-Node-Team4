import { Form, Button } from "react-bootstrap";
import {useNavigate, useParams}  from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";


import Dashboard from "../../../Components/Dashboard/Dashboard";



function EditCeq(){

    

let navigate = useNavigate();
const {id} = useParams();
  const goBack = ()=>{
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

  useEffect(()=>{
    axios
    .get(`http://localhost:3009/course-enquiries/${id}`)
    .then((response) =>{
      setUserstatus(response.data.userstatus);
      console.log(response.data);
    })
  }, [])
function handleSubmit(e) {
  e.preventDefault();
  console.log(userstatus);

 axios.put(`http://localhost:3009/course-enquiries/${id}`, {userstatus: userstatus})
      .then((response)=>{
        console.log(response);
        alert("Status Updated");
        goBack();
      })
      .catch((error)=>{
        console.log(error);
        alert("Status not updated")
      })

}



  return(
    <div>
      <Dashboard />
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Update Status</Form.Label>
        <Form.Control type="text" name="userstatus" placeholder="Enter the enquiriee" value={userstatus || ""} onChange={handleChange} />

        <Form.Text className="text-muted">
        Options <b>['Pending','Rejected', 'Purchased', 'Payment Pending', 'Interested'] </b>
        </Form.Text>
      </Form.Group>

      <Button variant="warning" type="submit">Update Status</Button>
      </Form>

        </div>
    )
}

export default EditCeq;