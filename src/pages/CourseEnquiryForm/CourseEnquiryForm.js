import { useState, useEffect } from "react";
import axios from "axios";

import { Form, Button } from "react-bootstrap";

import './CourseEnquiryForm.css'

function CourseEnquiryForm(props) {

    const [inputs, setInputs] = useState({});


    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs);
        axios
            .post('http://localhost:3009/course-enquiries/', inputs)
            .then(response => {
                console.log('promise fulfilled')
                console.log(response)
                alert("enquiry submitted")
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="enquiryForm">

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name="name" value={inputs.name || ""} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email id" name="email" value={inputs.email || ""} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter your age" name="age" value={inputs.age || ""} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter the course name" name="courseName" value={inputs.courseName || ""} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* Course Category: <Form.Check type="checkbox" label="Web Dev"  className="formCheckBox"/><Form.Check type="checkbox" label="IOT"  className="formCheckBox"/><Form.Check type="checkbox" label="ML"  className="formCheckBox"/> */}
                    <label for="qualification">Qualification:</label>

                    <Form.Select name="qualification" aria-label="Default select example" defaultValue={inputs.qualification} value={inputs.qualification || ""} onChange={handleChange}>
                        <option value="Web Dev">BTech</option>
                        <option value="ML">B.Sc</option>
                        <option value="IOT">Higher Secondary</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <label for="interest">Technology Preference:</label>
                    <Form.Select name="interest" aria-label="Default select example" vdefaultValue={inputs.interest} value={inputs.interest || ""} onChange={handleChange}>
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