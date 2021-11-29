import { Form, Button } from "react-bootstrap";

import './CourseEnquiryForm.css'

function CourseEnquiryForm() {


    return (
        <div className="enquiryForm">

            <Form>

                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name="name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email id" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter your age" name="age" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter the course name" name="coursename" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* Course Category: <Form.Check type="checkbox" label="Web Dev"  className="formCheckBox"/><Form.Check type="checkbox" label="IOT"  className="formCheckBox"/><Form.Check type="checkbox" label="ML"  className="formCheckBox"/> */}
                    <label for="qualification">Qualification:</label>

                    <Form.Select name="category" aria-label="Default select example" >
                        <option value="Web Dev">BTech</option>
                        <option value="ML">B.Sc</option>
                        <option value="IOT">Higher Secondary</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <label for="interest">Technology Preference:</label>
                    <Form.Select name="category" aria-label="Default select example" >
                        <option value="Web Dev">Web Dev</option>
                        <option value="ML">ML</option>
                        <option value="IOT">AI</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="success" type="submit">
                    Enquire
                </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="primary" >
                    Go Back
                </Button>
            </Form>
        </div>
    )
}


export default CourseEnquiryForm;