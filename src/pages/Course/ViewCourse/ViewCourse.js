import './ViewCourse.css';
import axios from 'axios';

import {useState, useEffect } from "react";



function ViewCourse (){

    const [courses, setCourses] = useState([]);
    

    useEffect(()=>{
        console.log('The use effect hook has been executed');

        axios
        .get('http://localhost:5000/courses')
        .then(response =>{
            console.log('Promise fulfilled');
            console.log(response);
            //response object contains the complete HTTP REQUEST with
            //returned data, status code, and headers. We need only 'data'
            setCourses(response.data);
        })

    }, [])


    return(
        <>
        <div>
            <h1>
                Course List
            </h1>
            <div>
                {courses.map(course =>
                    // <div key={staff.id} className="staffListLI">
                    //     {/* <Staff details = {staff} /> */}
                    // </div>
                    <div>
                    <div>{course.coursecode}</div>
                    <div>{course.coursename}</div>
                    <div>View Course Details</div>
                    </div>
                    )}
            </div>

        </div>
        </>
    )
}

export default ViewCourse;