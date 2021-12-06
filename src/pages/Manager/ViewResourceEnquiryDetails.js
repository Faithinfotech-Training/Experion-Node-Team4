// import Dashboard from "../../Components/Dashboard/Dashboard";
import ManagerDashboard from "../../Components/ManagerDashboard/ManagerDashboard";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Table } from "react-bootstrap";
import './Manager.css'
function ManagerViewResourceEnquiryDetails() {

    const [inputs, setInputs] = useState({});
    const { id } = useParams();
    const mytoken = localStorage.getItem('mytoken');
    useEffect(() => {
        var config = {
            method: 'get',
            url: `http://localhost:3009/resource-enquiries/${id}`,
            headers: {
                'Authorization': `Bearer ${mytoken}`,
                'Content-Type': 'application/json'
            }
        }
        axios(config)
            .then(response => {
                console.log(response.data);
                setInputs(response.data);
            })
    }, [])



    return (
        <>
            <ManagerDashboard />
            <div className="resource-list">
                <center>  <h4>Resource enquiry Details</h4> </center>

                <Table striped bordered>
                    <thead>
                        <tr>

                            <th> Enquirer Name</th>
                            <th> Enquirer Email</th>
                            <th> Enquired resource</th>
                            <th>Enquiree Status</th>
                        </tr></thead>
                    <tbody>
                        <tr>
                            <td> {inputs.name}</td>
                            <td> {inputs.email}</td>

                            <td> {inputs.resourceName}</td>
                            <td> {inputs.userstatus}</td>
                        </tr>
                    </tbody>

                </Table>
            </div>
        </>
    )
}

export default ManagerViewResourceEnquiryDetails;