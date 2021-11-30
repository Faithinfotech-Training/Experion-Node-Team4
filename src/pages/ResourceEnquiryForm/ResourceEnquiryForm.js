import { useState, useEffect } from "react";
import axios from "axios";

import { Form, Button } from "react-bootstrap";

import './ResourceEnquiryForm.css';

function ResourceEnquiryForm(props) {

    const [inputs, setInputs] = useState({});

//     useEffect(() => {
//         axios
//             .get(`http://localhost:5000/enquiry/${props.id}`) //assuming node api sever running at 5000 with enquiry details
//             .then(response => {
//                 console.log(response)
//                 setInputs(response.data)
//             })
//     }, [])

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs);
        axios
            .post('http://localhost:3009/resource-enquiries/', inputs)
            .then(response => {
                console.log('promise fulfilled')
                console.log(response)
                alert("enquiry submitted")
            })
    }


    return (
        <div className="enquiryForm">

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" >
                    <Form.Label>Name : </Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name="name" value={inputs.name || ""} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email : </Form.Label>
                    <Form.Control type="email" placeholder="Enter your email id" name="email" value={inputs.email || ""} onChange={handleChange} />
                </Form.Group>

                {/* <Form.Group className="mb-3" >
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter your age" name="age" />
                </Form.Group> */}

                <Form.Group className="mb-3" >
                    <Form.Label>Resouce Name : </Form.Label>
                    <Form.Control type="text" placeholder="Enter the resource name" name="resourceName" value={inputs.resourceName || ""} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Requesting Date : </Form.Label>
                    <Form.Control type="date" placeholder="Date from which you want to avail" name="reqDate" value={inputs.reqDate || ""} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSelect">
                    <label for="duration">Duration : </label>

                    <Form.Select name="duration" aria-label="Default select example" value={inputs.duration} onChange={handleChange}>
                        <option value="twoWeeks">Two Weeks</option>
                        <option value="threeWeeks">Three Weeks</option>
                        <option value="fourWeeks">Four Weeks</option>
                    </Form.Select>
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <label for="interest">Technology Preference:</label>
                    <Form.Select name="category" aria-label="Default select example" >
                        <option value="Web Dev">Web Dev</option>
                        <option value="ML">ML</option>
                        <option value="IOT">AI</option>
                    </Form.Select>
                </Form.Group> */}
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


export default ResourceEnquiryForm;
