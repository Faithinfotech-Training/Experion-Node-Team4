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

    const [ceqsearch, setCeqSearch] = useState("");

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
            <div className="mainBody" style={{ height: "50vh" }}>
                <h4>
                    View all course enquiries
                </h4>
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th align="left" >Course Name
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input
                                        type="text"
                                        align="center"
                                        placeholder="Search here"
                                        onChange={(e) => {
                                            setCeqSearch(e.target.value);
                                        }}
                                    />
                                </th>
                                <th>Enquiree Name</th>
                                <th>Email</th>
                                <th>Details</th>

                            </tr>
                        </thead>
                        <tbody>
                            {courseEnquiries.filter((courseEnquirie) => {
                                if (ceqsearch == "") {
                                    return courseEnquirie;
                                } else if (courseEnquirie.courseName.includes(ceqsearch)) {
                                    return courseEnquirie;
                                }
                            })
                                .map(courseEnquirie => {
                                    return (
                                        <tr>
                                            <td>{courseEnquirie.courseName}</td>
                                            <td>{courseEnquirie.name}</td>
                                            <td>{courseEnquirie.email}</td>
                                            <td><Link to={`${courseEnquirie.id}`}>View Enquiree Details</Link></td>
                                        </tr>

                                    )
                                })}
                        </tbody>
                    </Table>
                </div>

            </div>

        </>
    )
}

export default ViewCeq;