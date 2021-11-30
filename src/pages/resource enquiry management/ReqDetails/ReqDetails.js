import Dashboard from "../../../Components/Dashboard/Dashboard";

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
        <h1>Resource enquiry Details</h1>
        <h2>Enquirer name: {inputs.name}</h2>
        <h2>Enquirer email : { inputs.email}</h2>
        <h2>Enquired resource: {inputs.resourceName}</h2>
        <h2>Date from resource required: {inputs.reqDate}</h2>
        <h2>Enquired Duration: {inputs.duration}</h2>
        <h2>Enquiry Status: {inputs.userstatus}</h2>

        <Button variant="success" type="submit" onClick={() => navigate(`/admin/resource-enquiry/edit-resource-enquiry/${inputs.id}`)}>Update Status</Button>
        </>
    )
}

export default ReqDetails;