import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

import './RegistrationForm.css';

import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ManagerRegistrationForm() {


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
            "role": "Manager"
        }


        axios
            .post('http://localhost:3009/users/register', regData)
            .then(response => {

                toast.success(" Added Successfully", {
                    transition: Slide,
                    hideProgressBar: true,
                    autoClose: 3000
                })
                if (response.data.user.role === 'Manager') {
                    console.log(response);


                }
            })

    }

    return (
        <div className="registrationForm">
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name :
                        <span className="required">*</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange} value={inputs.name || ""} pattern="[A-Za-z]+\s{1}[A-Za-z]+" onInvalid={(e) => { e.target.setCustomValidity('Enter your name') }} onInput={(e) => { e.target.setCustomValidity('') }} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address :</Form.Label>
                    <span className="required">*</span>
                    <Form.Control type="email" required placeholder="Enter email" name="email" onChange={handleChange} value={inputs.email || ""} onInvalid={(e) => { e.target.setCustomValidity('Enter a valid email-id') }} onInput={(e) => { e.target.setCustomValidity('') }} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password :
                        <span className="required">*</span>
                        </Form.Label>
                    <Form.Control type="password" required placeholder="Password" name="password" onChange={handleChange} value={inputs.password || ""} pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" onInvalid={(e) => { e.target.setCustomValidity('Password must be minimum eight characters, at least one letter, one number and one special character') }} onInput={(e) => { e.target.setCustomValidity('') }} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="primary" onClick={() => { navigate("/admin/") }}>
                    Go Back
                </Button>
            </Form>
        </div>
    )
}


export default ManagerRegistrationForm;