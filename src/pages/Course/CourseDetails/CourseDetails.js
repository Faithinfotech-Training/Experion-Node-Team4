import axios from "axios";
import {useState, useEffect} from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

import Dashboard from "../../../Components/Dashboard/Dashboard";



function CourseDetails(){

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
        axios.get(`http://localhost:3009/courses/${id}`)
        .then(response =>{
            console.log(response.data);
            setInputs(response.data);
        })
    }, [])



    return(
        <>
        <Dashboard />
        <h1>Course Details</h1>
        <h2>Course name: {inputs.coursename}</h2>
        <h2>Course Code : { inputs.coursecode}</h2>
        <h2>Course Fee: {inputs.coursefee}</h2>
        <button onClick={()=> navigate(`/admin/course/edit-course/${id}`)}>Edit Course</button>
        <button onClick={()=> {deleteCourse(); navigate('/admin/course/view-courses')}}>Delete</button>

        </>
    )
}

export default CourseDetails;