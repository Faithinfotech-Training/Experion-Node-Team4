import Dashboard from "../../../Components/Dashboard/Dashboard";
import './CeqDetails.css';

import axios from "axios";
import {useState, useEffect} from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { Form, Button } from "react-bootstrap";

function CeqDetails(){

    const [inputs, setInputs] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const mytoken = localStorage.getItem('mytoken');

    //Delete course option
    const deleteCourseEnquiree = ()=>{

        var config = {
            method: 'delete',
            url: `http://localhost:3009/course-enquiries/${id}`,
            headers: { 
              'Authorization': `Bearer ${mytoken}`, 
              'Content-Type': 'application/json'
            }
          };

        axios
        (config)
        .then((response)=>{
                console.log(response);
                window.location.reload();
        })
        .catch((error)=>{
            console.log(error);
        })
            
    }

    useEffect(()=>{
        const config = {
            method: 'get',
            url: `http://localhost:3009/course-enquiries/${id}`,
            headers: { 
              'Authorization': `Bearer ${mytoken}`, 
              'Content-Type': 'application/json'
            }

        }
        axios(config)
        .then(response =>{
            console.log(response.data);
            setInputs(response.data);
        })
    }, [])



    return(
        <>
        <Dashboard />
        <div><center>
        <h1>Course Enquiree Details</h1>
        <h2>Enquiree Name: {inputs.name}</h2>
        <h2>Enquirie Email : { inputs.email}</h2>
        <h2>Enquired Course: {inputs.courseName}</h2>
        <h2>Enquirie Status: {inputs.userstatus}</h2>
        <Button onClick={()=> navigate(`/admin/course-enquiry/edit-course-enquiry/${id}`)} variant="primary">Update Enquiree Status</Button>
        &nbsp;&nbsp;&nbsp;
        <Button onClick={()=> {deleteCourseEnquiree(); navigate('/admin/course-enquiries/')}} variant="danger">Delete</Button>
        </center></div>
        </>
    )
}

export default CeqDetails;