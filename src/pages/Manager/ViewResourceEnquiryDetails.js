// import Dashboard from "../../Components/Dashboard/Dashboard";
import ManagerDashboard from "../../Components/ManagerDashboard/ManagerDashboard";

import axios from "axios";
import {useState, useEffect} from "react";
import { useParams } from "react-router";


function ManagerViewResourceEnquiryDetails(){

    const [inputs, setInputs] = useState({});
    const { id } = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3009/resource-enquiries/${id}`)
        .then(response =>{
            console.log(response.data);
            setInputs(response.data);
        })
    }, [])



    return(
        <>
        <ManagerDashboard />
        <h1>Resource enquiry Details</h1>
        <h2>Enquirer name: {inputs.name}</h2>
        <h2>Enquirer email : { inputs.email}</h2>
        <h2>Enquired resource: {inputs.resourceName}</h2>

        </>
    )
}

export default ManagerViewResourceEnquiryDetails;