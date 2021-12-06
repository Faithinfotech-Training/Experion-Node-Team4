import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "../../../Components/Dashboard/Dashboard";

import './EditCourse.css'


function EditCourse() {

  let navigate = useNavigate();
  const { id } = useParams();
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

  useEffect(() => {
    axios
      .get(`http://localhost:3009/courses/${id}`)
      .then((response) => {
        setCourse(response.data);
        console.log(response.data);
      })
  }, [])
  function handleSubmit(e) {
    e.preventDefault();
    console.log(courses);

    axios.put(`http://localhost:3009/courses/${id}`, courses)
      .then((response) => {
        console.log(response);
        toast.success("Updated Successfully", {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 3000
        })

      })
      .catch((error) => {
        console.log(error);
      })
    navigate("/admin/course/view-courses")
  }



  return (
    <div>
      <Dashboard />
      <Form onSubmit={handleSubmit}>
      <div className= "details-table">
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

        <Button variant="success" type="submit">
          Update
        </Button>&nbsp;&nbsp;&nbsp;
        <Button variant="primary" type="reset" onClick={() => goBack()}>
          Go Back
        </Button>
        </div>
      </Form>
    </div>
  )
}

export default EditCourse;