import { Form, Button } from "react-bootstrap";
import {useNavigate}  from 'react-router-dom';

import './EditCourse.css'


function EditCourse(){

  let navigate = useNavigate();
    const goBack = ()=>{
      navigate('/admin/course')
    }


    return(
        <div>
        <Form>
  <Form.Group className="mb-3">
    <Form.Label>Course Name</Form.Label>
     <Form.Control type="text" placeholder="Enter the course name" />
 
    <Form.Text className="text-muted">
     Anything specific to course
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Course Code</Form.Label>
    <Form.Control type="number" placeholder="Enter the code" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Course Fee in INR:</Form.Label>
    <Form.Control type="number" placeholder="Enter the code" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    Course Category: <Form.Check type="checkbox" label="Web Dev"  className="formCheckBox"/><Form.Check type="checkbox" label="IOT"  className="formCheckBox"/><Form.Check type="checkbox" label="ML"  className="formCheckBox"/>
  </Form.Group>
  <Button variant="success" type="submit">
    Update
  </Button>&nbsp;&nbsp;&nbsp;
  <Button variant="primary" type="submit" onClick = {()=> goBack()}>
    Go Back
  </Button>
</Form>
</div>
    )
}

export default EditCourse;