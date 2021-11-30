import Dashboard from "../../../Components/Dashboard/Dashboard";

import axios from "axios";
import {useState, useEffect} from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

function CeqDetails(){

    const [inputs, setInputs] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    //Delete course option
    const deleteCourse = ()=>{
        axios
        .delete(`http://localhost:3009/courses/${id}`)
        .then((response)=>{
                console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
            
    }

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
        <h2>Enquiree Name: {inputs.name}</h2>
        <h2>Enquirie Email : { inputs.email}</h2>
        <h2>Enquirie Status: {inputs.userstatus}</h2>
        <button onClick={()=> navigate(`/admin/course-enquiry/edit-course-enquiry/${id}`)}>Update Enquiree Status</button>
        <button onClick={()=> {deleteCourse(); navigate('/admin/course/view-courses')}}>Delete</button>

        </>
    )
}

export default CeqDetails;