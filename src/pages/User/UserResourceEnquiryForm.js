import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import { Form, Button } from "react-bootstrap";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../ResourceEnquiryForm/ResourceEnquiryForm.css';

function UserResourceEnquiryForm(props) {
    let [user, setUser] = useState(false);

 

  const Users = () => {
    if (localStorage.getItem("role") === "User") {
      setUser(true);
    }
  };
  useEffect(() => {
 
    Users();
  });

  const User = () => {
    let role = localStorage.getItem("role");
    // let username = localStorage.getItem("username");
    let id = localStorage.getItem("id");

    if (localStorage.getItem("mytoken") && role === "User") {
      return id;
    }
    
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3009/users/${User()}`)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
        
      })

  }, []);

    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const [resources, setResources] = useState([]);
    // const navigate =useNavigate()

    useEffect(() => {
        console.log('The use effect hook has been executed');

        axios
            .get('http://localhost:3009/resources')
            .then(response => {
                console.log('Promise fulfilled');
                console.log(response);
                //response object contains the complete HTTP REQUEST with
                //returned data, status code, and headers. We need only 'data'
                setResources(response.data);
            })

    }, [])


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
                toast.success("Submitted Successfully", {
                    transition: Slide,
                    hideProgressBar: true,
                    autoClose: 5000
                })
                navigate("/home/");
            }).catch(error => {
                console.log(error);
            })
    }

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    return (
        <div className="enquiryForm">

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" >
                    <Form.Label>Name :
                        <span className="required">*</span>
                    </Form.Label>
                    <Form.Control type="text" required placeholder="Enter your name" name="name" value={inputs.name || user.name} onChange={handleChange} pattern="[A-Za-z]+\s{1}[A-Za-z]+" onInvalid={(e) => { e.target.setCustomValidity('Enter your name') }} onInput={(e) => { e.target.setCustomValidity('') }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email :
                        <span className="required">*</span>
                    </Form.Label>
                    <Form.Control type="email" required placeholder="Enter your email id" name="email" value={inputs.email || user.email} onChange={handleChange} onInvalid={(e) => { e.target.setCustomValidity('Enter a valid email-id') }} onInput={(e) => { e.target.setCustomValidity('') }} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Resouce Name :
                        <span className="required">*</span>
                    </Form.Label>
                    <Form.Select name="resourceName" value={inputs.resourceName} onChange={handleChange} required>
                        <option value="" >Select Resource</option>
                        {resources.map(resource =>
                            <option value={resource.resourcename}>{resource.resourcename}</option>
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Requesting Date :
                        <span className="required">*</span>
                    </Form.Label>
                    <Form.Control type="date" min={disablePastDate()} required placeholder="Date from which you want to avail" name="reqDate" value={inputs.reqDate || ""} onChange={handleChange} onInvalid={(e) => { e.target.setCustomValidity('Enter a date from which you want to avail, must be a future date') }} onInput={(e) => { e.target.setCustomValidity('') }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSelect">
                    <Form.Label for="duration">Duration :
                        <span className="required">*</span>
                    </Form.Label>

                    <Form.Select name="duration" required aria-label="Default select example" value={inputs.duration} onChange={handleChange}>
                        <option value="">--choose an option--</option>
                        <option value="twoWeeks">Two Weeks</option>
                        <option value="threeWeeks">Three Weeks</option>
                        <option value="fourWeeks">Four Weeks</option>
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


export default UserResourceEnquiryForm;
