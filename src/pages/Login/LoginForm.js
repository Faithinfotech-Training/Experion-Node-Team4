import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";







function LoginForm() {

    localStorage.clear();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    //handle the change of form elements
    function handleChange(event) {
        //saving the name of element and its value
        const name = event.target.name;
        const value = event.target.value;

        //updating the values into the state
        setInputs(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(e) {
        //to prevent the default submit behaviour
        e.preventDefault();
        //printitng 
        console.log(inputs);

        axios
            .post('http://localhost:3009/users/login', inputs)
            .then(response => {
                // alert(response.data.user.role);
                let role = response.data.user.role;
                let id = response.data.user.id;
                localStorage.setItem('mytoken', response.data.accessToken);
                console.log(response.data)
                localStorage.setItem('role', response.data.user.role);
                localStorage.setItem('username', response.data.user.name)

                if (role === "Admin") {

                    navigate('/admin');
                } else if (role === "User") {
                    console.log("Working");
                    navigate(`/home/user/${id}`);
                    // window.location = `/home/user/${id}}`
                }
            })


    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
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
        </>
    )
}


export default LoginForm;