import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    const [userstatus, setUserStatus] = useState();
    const goBack = () => {
        navigate('/admin/resource-enquiry')
    }

    const [inputs, setInputs] = useState({});
    const mytoken = localStorage.getItem('mytoken');

    useEffect(() => {
        var config = {
            method: 'get',
            url: `http://localhost:3009/resource-enquiries/${props.id}`,
            headers: { 
              'Authorization': `Bearer ${mytoken}`, 
              'Content-Type': 'application/json'
            }
          };
        axios(config)
            .then((response) => {
                setUserStatus(response.data);
                console.log(response.data);
            })
    }, []);

    //handle the change of form elements
    function handleChange(event) {
        //saving the name of element and its value
        const name = event.target.name;
        const value = event.target.value;

        //updating the values into the state
        // setInputs(values => ({ ...values, [name]: value }))
        setUserStatus(value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs);
        var datas = JSON.stringify({
            "userstatus": userstatus
          });
          var config = {
            method: 'put',
            url: `http://localhost:3009/resource-enquiries/${props.id}`,
            headers: { 
              'Authorization': `Bearer ${mytoken}`, 
              'Content-Type': 'application/json'
            },
            data: datas
          };

        axios(config)
        .then((response) => {
            console.log(response);
            toast.success("Updated Successfully", {
              transition: Slide,
              hideProgressBar: true,
              autoClose: 5000
            })
           
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
                    <Form.Select name="userstatus" aria-label="Default select example" value={userstatus || ""} onChange={handleChange}>
                        <option value="Pending">Pending</option>
                        <option value="Interested">Interested</option>
                        <option value="Payment Pending">Payment Pending</option>
                        <option value="Purchased">Purchased</option>
                        <option value="Rejected">Rejected</option>
                    </Form.Select>
                </Form.Group>


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
