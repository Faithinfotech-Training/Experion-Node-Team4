import './ViewResource.css';
import axios from 'axios';

import {useState, useEffect } from "react";



function ViewResource (){

    const [resources,setResources] = useState([]);
    

    useEffect(()=>{
        console.log('The use effect hook has been executed');

        axios
        .get('http://localhost:5000/resources')
        .then(response =>{
            console.log('Promise fulfilled');
            console.log(response);
            //response object contains the complete HTTP REQUEST with
            //returned data, status code, and headers. We need only 'data'
            setResources(response.data);
        })

    }, [])


    return(
        <>
        <div>
            <h1>
                Course List
            </h1>
            <div>
                {resources.map(resource =>
                    // <div key={staff.id} className="staffListLI">
                    //     {/* <Staff details = {staff} /> */}
                    // </div>
                    <div>
                    <div>{resource.resourcecode}</div>
                    <div>{resource.coursename}</div>
                    <div>View Course Details</div>
                    </div>
                    )}
            </div>

        </div>
        </>
    )
}

export default ViewResource