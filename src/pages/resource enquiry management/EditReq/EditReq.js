import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "../../../Components/Dashboard/Dashboard";

import './ResourceEnquiryForm.css';


function EditReq() {


    const { id } = useParams();
    return (<>
        <UpdateStatus id={id} />
    </>)

}


function UpdateStatus(props) {
    //Navigate back to admin/course
    let navigate = useNavigate();
    const goBack = () => {
        navigate('/admin/resource-enquiry')
    }

    const [inputs, setInputs] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:3009/resource-enquiries/${props.id}`)
            .then((response) => {
                setInputs(response.data);
                console.log(response.data);
            })
    }, []);

    //handle the change of form elements
    function handleChange(event) {
        //saving the name of element and its value
        const name = event.target.name;
        const value = event.target.value;

        //updating the values into the state
        setInputs(values => ({ ...values, [name]: value }))
    }


    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs);

        axios.put(`http://localhost:3009/resource-enquiries/${props.id}`, inputs)
            .then((response) => {
                console.log(response);
                alert("status updated!")
                navigate('/admin/resource-enquiry')
            })
            .catch((error) => {
                console.log(error);
            })

    }



    return (
        <div>
            <Dashboard />

            <h1>Edit Status</h1>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" >
                    <Form.Label>Update : </Form.Label>
                    <Form.Control type="text" placeholder="Enter status" name="userstatus" value={inputs.userstatus || ""} onChange={handleChange} />
                </Form.Group>

                <Form.Text className="text-muted">
                    Options <b>['Pending','Rejected', 'Purchased', 'Payment Pending', 'Interested'] </b>
                </Form.Text>
                
                <Button variant="success" type="submit">
                    Update
                </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="primary" type="reset" onClick={() => goBack()}>
                    Go Back
                </Button>
            </Form>
        </div>
    )
}


export default EditReq;