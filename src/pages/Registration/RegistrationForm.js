import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

import './RegistrationForm.css';
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





function RegistrationForm() {

    localStorage.clear();
    //initialize to empty
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    //handle the change of form elements
    function handleChange(event) {
        //saving the name of element and its value
        const name = event.target.name;
        const value = event.target.value;

        //updating the values into the state
        setInputs(values => ({ ...values, [name]: value }))
    }
    function handleSubmit(e) {
        e.preventDefault();
        const regData = {
            "name": inputs.name,
            "email": inputs.email,
            "password": inputs.password,
            "role": "User"
        }


        axios
            .post('http://localhost:3009/users/register', regData)
            .then(response => {
                if (response.status === 200) {
                    toast.success(" Added Successfully", {
                        transition: Slide,
                        hideProgressBar: true,
                        autoClose: 3000
                    })
                    localStorage.setItem('mytoken', response.data.accessToken);
                    localStorage.setItem('role', response.data.user.role);
                    if (response.data.user.role === 'User') {
                        console.log(response);
                    }
                }
            
            }).catch( err=>{
                toast.error(" User Already Exist", {
                    transition: Slide,
                    hideProgressBar: true,
                    autoClose: 3000
                })
            })


    }

    return (
        <div>
            <Form onSubmit={handleSubmit} className="registrationForm">

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange} value={inputs.name || ""} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name="email" onChange={handleChange} value={inputs.email || ""} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} value={inputs.password || ""} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="primary" onClick={() => { window.location = "/home" }}>
                    Go Back
                </Button>
            </Form>
        </div>
    )
}


export default RegistrationForm;