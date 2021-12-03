import Dashboard from "../../../Components/Dashboard/Dashboard";
import { Table } from "react-bootstrap";

// import './ViewCourse.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import './ViewCeq.css';

function ViewCeq() {

    const [courseEnquiries, setCourseEnquiries] = useState([]);
    const mytoken = localStorage.getItem('mytoken');

    useEffect(() => {
        console.log('The use effect hook has been executed');

        var config = {
            method: 'get',
            url: 'http://localhost:3009/course-enquiries',
            headers: { 
              'Authorization': `Bearer ${mytoken}`, 
              'Content-Type': 'application/json'
            }
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setCourseEnquiries(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
          
            

    }, [])


    return (
        <>
            <Dashboard />
            <div className="mainBody">
                <h1>
                    View Course Enquiriee List
                </h1>
                <div>
                <Table striped bordered hover>
                        <tr>
                            <th>id</th>
                            <th>Course Name</th>
                            <th>Details</th>
                            
                        </tr>
                    {courseEnquiries.map(courseEnquirie =>
                        // <div key={staff.id} className="staffListLI">
                        //     {/* <Staff details = {staff} /> */}
                        // </div>
                        // <div className="ULBoxs">
                        <tr>
                            <td>Name: {courseEnquirie.name}</td>
                            <td>Age: {courseEnquirie.age}</td>
                            <td><Link to={`${courseEnquirie.id}`}>View Enquiree Details</Link></td>
                            </tr>
                        // </div>
                    )}
                    </Table>
                </div>

            </div>

        </>
    )
}

export default ViewCeq;