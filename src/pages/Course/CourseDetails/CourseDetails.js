import axios from "axios";
import {useState, useEffect} from "react";
import { useParams } from "react-router";
import Dashboard from "../../../Components/Dashboard/Dashboard";



function CourseDetails(){

    const [inputs, setInputs] = useState({});
    const { id } = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3009/courses/${id}`)
        .then(response =>{
            console.log(response.data);
            setInputs(response.data);
        })
    })



    return(
        <>
        <Dashboard />
        <h1>Course Details</h1>
        <h2>Course name: {inputs.coursename}</h2>
        <h2>Course Code : { inputs.coursecode}</h2>
        <h2>Course Fee: {inputs.coursefee}</h2>

        </>
    )
}

export default CourseDetails;