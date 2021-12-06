import Dashboard from "../../../Components/Dashboard/Dashboard";
import { Table } from "react-bootstrap";

// import './ViewCourse.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import './ViewReq.css'
function ViewReq() {

    const [resourceEnquiries, setResourceEnquiries] = useState([]);
    const mytoken = localStorage.getItem('mytoken');

    const [reqsearch, setReqSearch] = useState("");

    useEffect(() => {
        console.log('The use effect hook has been executed');
        var config = {
            method: 'get',
            url: 'http://localhost:3009/resource-enquiries',
            headers: {
                'Authorization': `Bearer ${mytoken}`,
                'Content-Type': 'application/json'
            }
        };

        axios(config)
            .then(response => {
                console.log('Promise fulfilled');
                console.log(response);

                setResourceEnquiries(response.data);
            })

    }, []);


    return (
        <>

            <Dashboard />
            <div className="view-req">
                <h4>
                    View all resource enquiries
                </h4>
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th align="left" >Resource Name
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input
                                        type="text"
                                        align="center"
                                        placeholder="Search here"
                                        onChange={(e) => {
                                            setReqSearch(e.target.value);
                                        }}
                                    />
                                </th>
                                <th>Enquiree Name</th>
                                <th>Email</th>
                                <th>Details</th>

                            </tr>
                        </thead>
                        <tbody>
                            {resourceEnquiries.filter((resourceEnquirie) => {
                                if (reqsearch == "") {
                                    return resourceEnquirie;
                                } else if (resourceEnquirie.resourceName.includes(reqsearch)) {
                                    return resourceEnquirie;
                                }
                            })
                                .map(resourceEnquirie => {
                                    return (
                                        <tr>
                                            <td>{resourceEnquirie.resourceName}</td>
                                            <td>{resourceEnquirie.name}</td>
                                            <td>{resourceEnquirie.email}</td>
                                            <td><Link to={`${resourceEnquirie.id}`}>View Enquiree Details</Link></td>
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

export default ViewReq;