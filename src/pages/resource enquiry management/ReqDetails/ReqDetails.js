import Dashboard from "../../../Components/Dashboard/Dashboard";
import './ReqDetails.css'
import { Button } from "react-bootstrap";

import axios from "axios";
import {useState, useEffect} from "react";
import { useParams } from "react-router";

import {useNavigate} from 'react-router-dom'; 

function ReqDetails(){

    const [inputs, setInputs] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get(`http://localhost:3009/resource-enquiries/${id}`)
        .then(response =>{
            console.log(response.data);
            setInputs(response.data);
        })
    }, [])



    return(
        <>
        <Dashboard />
        <center>
        <div>
       
        <h1>Resource enquiry Details</h1>
        <br/>
        
        <h4>Enquirer name: <span>{inputs.name}</span> </h4>
        <h4>Enquirer email : <span>{ inputs.email} </span></h4>
        <h4>Enquired resource: <span> {inputs.resourceName} </span></h4>
        <h4>Date from resource required: <span>{inputs.reqDate}</span></h4>
        <h4>Enquired Duration: <span>{inputs.duration}</span></h4>
        <h4>Enquiry Status: <span>{inputs.userstatus}</span></h4>

        <Button variant="success" type="submit" onClick={() => navigate(`/admin/resource-enquiry/edit-resource-enquiry/${inputs.id}`)}>Update Status</Button>
       
       </div>
       </center>
        </>
    )
}

export default ReqDetails;