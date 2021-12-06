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
    const matchpassword = ()=>{
        const pwd = inputs.password;
        const cfpwd = inputs.cfpassword;
        if(pwd === cfpwd){
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
                    toast.success(" Registered Successfully", {
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
                navigate("/home/login");

            }).catch(err => {
                toast.error(" User Already Exist", {
                    transition: Slide,
                    hideProgressBar: true,
                    autoClose: 3000
                })
            })
            return true;
        }else{
            // alert("Incorrect password");
            toast.error(" Incorrect Password", {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000
            })
            return false;
        }

    }
    function handleSubmit(e) {
        e.preventDefault();
        
        matchpassword();

        


    }

    return (
        <div>
            <Form onSubmit={handleSubmit} className="registrationForm">

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
                    <br/>
                    <Form.Text className="text-muted">
                        Password must be minimum eight characters, at least one letter, one number and one special character
                    </Form.Text>
                    <Form.Control type="password" required placeholder="Password" name="password"  onChange={handleChange} value={inputs.password || ""} pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" onInvalid={(e) => { e.target.setCustomValidity('Enter a valid password') }} onInput={(e) => { e.target.setCustomValidity('') }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password :
                        <span className="required">*</span>
                    </Form.Label>
                    <br/>
                    <Form.Text className="text-muted">
                        Password must be minimum eight characters, at least one letter, one number and one special character
                    </Form.Text>
                    <Form.Control type="password" required placeholder="Confirm password" name="cfpassword"  onChange={handleChange} value={inputs.cfpassword || ""} pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" onInvalid={(e) => { e.target.setCustomValidity('Enter a valid password') }} onInput={(e) => { e.target.setCustomValidity('') }} />
                </Form.Group>

                <Button variant="success" type="submit">
                    Register
                </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="primary" onClick={() => { window.location = "/home" }}>
                    Go Back
                </Button>
            </Form>
        </div>
    )
}


export default RegistrationForm;