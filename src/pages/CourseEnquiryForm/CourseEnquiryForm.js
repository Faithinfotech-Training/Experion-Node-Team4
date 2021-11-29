import { Form, Button } from "react-bootstrap";

import './CourseEnquiryForm.css'

function CourseEnquiryForm(){


    return(
        <div className="enquiryForm">

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
          <Form.Control type="number" placeholder="Enter the code" name="coursecode" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Course Fee in INR:</Form.Label>
          <Form.Control type="number" placeholder="Enter the code" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* Course Category: <Form.Check type="checkbox" label="Web Dev"  className="formCheckBox"/><Form.Check type="checkbox" label="IOT"  className="formCheckBox"/><Form.Check type="checkbox" label="ML"  className="formCheckBox"/> */}
          <label for="cars">Choose a category:</label>

          <Form.Select name="category" aria-label="Default select example" >
            <option value="Web Dev">Web Dev</option>
            <option value="ML">ML</option>
            <option value="IOT">IOT</option>
          </Form.Select>
        </Form.Group>
        <Button variant="success" type="submit">
          Add
        </Button>&nbsp;&nbsp;&nbsp;
        <Button variant="primary" type="reset" >
          Go Back
        </Button>
      </Form>
    </div>
    )
}


export default CourseEnquiryForm;