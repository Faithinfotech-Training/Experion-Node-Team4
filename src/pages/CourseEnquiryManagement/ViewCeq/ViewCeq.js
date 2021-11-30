import Dashboard from "../../../Components/Dashboard/Dashboard";

// import './ViewCourse.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import './ViewCeq.css';

function ViewCeq() {

    const [courseEnquiries, setCourseEnquiries] = useState([]);

    useEffect(() => {
        console.log('The use effect hook has been executed');

        axios
            .get('http://localhost:3009/course-enquiries')
            .then(response => {
                console.log('Promise fulfilled');
                console.log(response);
                //response object contains the complete HTTP REQUEST with
                //returned data, status code, and headers. We need only 'data'
                setCourseEnquiries(response.data);
            })

    }, [])


    return (
        <>
            <Dashboard />
            <div className="mainBody">
                <h1>
                    Course List
                </h1>
                <div>
                    {courseEnquiries.map(courseEnquirie =>
                        // <div key={staff.id} className="staffListLI">
                        //     {/* <Staff details = {staff} /> */}
                        // </div>
                        <div className="ULBoxs">
                            <div>Name: {courseEnquirie.name}</div>
                            <div>Age: {courseEnquirie.age}</div>
                            <div><Link to={`${courseEnquirie.id}`}>View Enquiree Details</Link></div>
                        </div>
                    )}
                </div>

            </div>

        </>
    )
}

export default ViewCeq;