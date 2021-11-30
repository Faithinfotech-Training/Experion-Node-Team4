import Dashboard from "../../../Components/Dashboard/Dashboard";

import axios from "axios";
import {useState, useEffect} from "react";
import { useParams } from "react-router";


function CeqDetails(){

    const [inputs, setInputs] = useState({});
    const { id } = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3009/course-enquiries/${id}`)
        .then(response =>{
            console.log(response.data);
            setInputs(response.data);
        })
    }, [])



    return(
        <>
        <Dashboard />
        <h1>Course Details</h1>
        <h2>Course name: {inputs.name}</h2>
        <h2>Course Code : { inputs.email}</h2>
        <h2>Course Fee: {inputs.qualification}</h2>

        </>
    )
}

export default CeqDetails;