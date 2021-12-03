import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "../../../Components/Dashboard/Dashboard";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './AddCourse.css'


function AddCourse() {

  //Navigate back to admin/course
  let navigate = useNavigate();
  const goBack = () => {
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
    const mytoken = localStorage.getItem('mytoken');
    var config = {
      method: 'post',
      url: 'http://localhost:3009/courses',
      headers: { 
        'Authorization': `Bearer ${mytoken}`, 
        'Content-Type': 'application/json'
      },
      data : courses
    };

    axios(config)
      .then((response) => {
        console.log(response);
        toast.success("New course Added Successfully", {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 3000
        })
      })
      .catch((error) => {
        console.log(error);
      })

  }



  return (
    <div>
      <Dashboard />
      <Form onSubmit={handleSubmit} className="add-courses">

        
      <Form.Group className="mb-3" >
          <Form.Label>Course Code</Form.Label>
          <Form.Control type="number" placeholder="Enter the code" name="coursecode" value={courses.coursecode || ""} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Course Name</Form.Label>
          <Form.Control type="text" name="coursename" placeholder="Enter the course name" value={courses.coursename || ""} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Course Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" placeholder="Add a description" value={courses.description || ""} onChange={handleChange}  />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Course Fee in INR:</Form.Label>
          <Form.Control type="number" placeholder="Enter course fee" name="coursefee" value={courses.coursefee || ""} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* Course Category: <Form.Check type="checkbox" label="Web Dev"  className="formCheckBox"/><Form.Check type="checkbox" label="IOT"  className="formCheckBox"/><Form.Check type="checkbox" label="ML"  className="formCheckBox"/> */}
          <label for="category">Choose a category:</label>

          <Form.Select name="category" aria-label="Default select example" defaultValue={courses.category} onChange={handleChange}>
            <option value="">--choose an option--</option>
            <option value="Web Dev">Web Dev</option>
            <option value="ML">ML</option>
            <option value="IOT">IOT</option>
          </Form.Select>
        </Form.Group>
        <Button variant="success" type="submit">
          Add
        </Button>&nbsp;&nbsp;&nbsp;
        <Button variant="primary" type="reset" onClick={() => goBack()}>
          Go Back
        </Button>
      </Form>
    </div>
  )
}

export default AddCourse;