import { Form, Button } from "react-bootstrap";
import {useNavigate}  from 'react-router-dom';
import {useState} from "react";
import axios from "axios";

import Dashboard from "../../../Components/Dashboard/Dashboard";

import './EditCourse.css'


function EditCourse(){

  let navigate = useNavigate();
    const goBack = ()=>{
      navigate('/admin/course')
    }

    const [courses, setCourse] = useState({})


  //handle the change of form elements
  function handleChange(event) {
    //saving the name of element and its value
    const name = event.target.name;
    const value = event.target.value;

    //updating the values into the state
    setCourse(values => ({ ...values, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(courses);

   axios.post("http://localhost:5000/courses", courses)
        .then((response)=>{
          console.log(response);
        })
        .catch((error)=>{
          console.log(error);
        })

  }



    return(
      <div>
        <Dashboard />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Course Name</Form.Label>
          <Form.Control type="text" name="coursename" placeholder="Enter the course name" value={courses.coursename || ""} onChange={handleChange} />

          <Form.Text className="text-muted">
            Anything specific to course
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Course Code</Form.Label>
          <Form.Control type="number" placeholder="Enter the code" name="coursecode" value={courses.coursecode || ""} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Course Fee in INR:</Form.Label>
          <Form.Control type="number" placeholder="Enter the code" name="coursefee" value={courses.coursefee || ""} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* Course Category: <Form.Check type="checkbox" label="Web Dev"  className="formCheckBox"/><Form.Check type="checkbox" label="IOT"  className="formCheckBox"/><Form.Check type="checkbox" label="ML"  className="formCheckBox"/> */}
          <label for="cars">Choose a category:</label>

          <Form.Select name="category" aria-label="Default select example" value={courses.category || ""} onChange={handleChange}>
            <option value="Web Dev">Web Dev</option>
            <option value="ML">ML</option>
            <option value="IOT">IOT</option>
          </Form.Select>
        </Form.Group>
        <Button variant="success" type="submit">
          Update
        </Button>&nbsp;&nbsp;&nbsp;
        <Button variant="primary" type="reset" onClick={() => goBack()}>
          Go Back
        </Button>
      </Form>
    </div>
    )
}

export default EditCourse;