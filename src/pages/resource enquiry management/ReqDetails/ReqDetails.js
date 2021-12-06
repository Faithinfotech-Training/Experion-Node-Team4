import Dashboard from "../../../Components/Dashboard/Dashboard";
import './ReqDetails.css'
import { Button } from "react-bootstrap";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { useNavigate } from 'react-router-dom';
import { Table } from "react-bootstrap";
import './ReqDetails.css'
function ReqDetails() {

    const [inputs, setInputs] = useState({});
    const { id } = useParams();
    const mytoken = localStorage.getItem('mytoken');
    const navigate = useNavigate();

    useEffect(() => {
        var config = {
            method: 'get',
            url: `http://localhost:3009/resource-enquiries/${id}`,
            headers: { 
              'Authorization': `Bearer ${mytoken}`, 
              'Content-Type': 'application/json'
            }
          };
        axios(config).then(response => {
                console.log(response.data);
                setInputs(response.data);
            })
    }, [])



    return (
        <>
            <Dashboard />
            <center>
                <div>

                    <h3>Resource enquiry Details</h3>
                    <br />
                 <div className="details-table">
                    <Table striped bordered>
                   
                    <thead>
    <tr>
                
                      <th> Name</th>
                            <th> Email</th>
                            <th>Resource</th>
                            <th>Date</th>
                            <th>Duration</th>
                            <th>Satus</th>
                            
                        </tr></thead><tbody>   
                  <tr>
                      <td>{inputs.name}</td>
                 <td>   {inputs.email} </td>
                    <td>  {inputs.resourceName}</td>
                   <td> {inputs.reqDate}</td>
                <td>    {inputs.duration} </td>
                <td>     {inputs.userstatus} </td>

                   <td> <Button variant="success" type="submit" onClick={() => navigate(`/admin/resource-enquiry/edit-resource-enquiry/${inputs.id}`)}>Update Status</Button></td>
                
                   </tr>
                   </tbody>
                   </Table>
                </div>
                </div>
            </center>
            
        </>
    )
}

export default ReqDetails;