import { Form, Button } from "react-bootstrap";
import {useNavigate}  from 'react-router-dom';
import {useState, useEffect } from "react";
import axios from "axios";

import './AddResource.css'


function AddResource(){

  let navigate = useNavigate();
    const goBack = ()=>{
      navigate('/admin/resource')
    }


    return(
        <div>
        <Form>
  <Form.Group className="mb-3">
    <Form.Label>Resource Name</Form.Label>
     <Form.Control type="text" placeholder="Enter the course name" />
 
    <Form.Text className="text-muted">
     Anything specific to Resource
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Resource Code</Form.Label>
    <Form.Control type="number" placeholder="Enter the code" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Resource Fee in INR:</Form.Label>
    <Form.Control type="number" placeholder="Enter the code" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    Resource Category: <Form.Check type="checkbox" label="Web Dev"  className="formCheckBox"/><Form.Check type="checkbox" label="IOT"  className="formCheckBox"/><Form.Check type="checkbox" label="ML"  className="formCheckBox"/>
  </Form.Group>
  <Button variant="success" type="submit">
    Add Resource
  </Button>
  &nbsp;&nbsp;&nbsp;

  <Button variant="primary" type="submit" onClick = {()=> goBack()}>
    Go Back
  </Button>
</Form>
</div>
    )
}

export default AddResource;