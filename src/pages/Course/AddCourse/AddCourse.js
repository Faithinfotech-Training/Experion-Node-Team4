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
    navigate('/admin/course/view-courses')

  }
  // const goBacktoCourse = () => {
  //   navigate('/admin/course/view-courses')
  // }
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
      data: courses
    };

    axios(config)
      .then((response) => {
        console.log(response);
        toast.success("New course Added Successfully", {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 3000
        })
        navigate("/admin/course/view-courses")
      })
      .catch((error) => {
        toast.error("Course already exists", {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 3000
        })
      })

  }



  return (
    <div>
      <Dashboard />
      <Form onSubmit={handleSubmit} className="add-courses">


        <Form.Group className="mb-3" >
          <Form.Label>Course Code :
            <span className="required">*</span>
          </Form.Label>
          <Form.Control type="number" min='100' required placeholder="Enter the code" name="coursecode" value={courses.coursecode || ""} onChange={handleChange} onInvalid={(e) => { e.target.setCustomValidity('Enter course code, min 3 digits') }} onInput={(e) => { e.target.setCustomValidity('') }} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Course Name :
            <span className="required">*</span>
          </Form.Label>
          <Form.Control type="text" required name="coursename" placeholder="Enter the course name" value={courses.coursename || ""} onChange={handleChange} pattern="[A-Za-z]+\s{0,1}(([A-Za-z])+)*" onInvalid={(e) => { e.target.setCustomValidity('Enter a valid course name') }} onInput={(e) => { e.target.setCustomValidity('') }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Course Description :
            <span className="required">*</span>
          </Form.Label>
          <Form.Control as="textarea" rows={3} required name="description" placeholder="Add a description" value={courses.description || ""} onChange={handleChange} pattern="{5,}" onInvalid={(e) => { e.target.setCustomValidity('Enter atleast 5 characters') }} onInput={(e) => { e.target.setCustomValidity('') }} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Course Fee in INR :
            <span className="required">*</span>
          </Form.Label>
          <Form.Control type="number" min='1000' required placeholder="Enter course fee" name="coursefee" value={courses.coursefee || ""} onChange={handleChange} onInvalid={(e) => { e.target.setCustomValidity('Enter fee for the course') }} onInput={(e) => { e.target.setCustomValidity('') }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label for="category">Choose a category :
            <span className="required">*</span>
          </Form.Label>

          <Form.Select name="category" required aria-label="Default select example" defaultValue={courses.category} onChange={handleChange} onInvalid={(e) => { e.target.setCustomValidity('choose a category from the list') }} onInput={(e) => { e.target.setCustomValidity('') }}>
            <option value="">--choose an option--</option>
            <option value="Web Dev">Web Dev</option>
            <option value="ML">ML</option>
            <option value="IOT">IOT</option>
          </Form.Select>
        </Form.Group>
        <Button variant="success" type="submit"   >
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