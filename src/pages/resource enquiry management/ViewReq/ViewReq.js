import Dashboard from "../../../Components/Dashboard/Dashboard";

// import './ViewCourse.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import './ViewReq.css'
import { Table } from "react-bootstrap";
function ViewReq() {

    const [resourceEnquiries, setResourceEnquiries] = useState([]);
    const mytoken = localStorage.getItem('mytoken');

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
            <div className="mainBody">
                <h1> <center>
                    Resource enquiries List
               
               </center> </h1>
               <Table striped bordered>
               <tr>
                            <th>name</th>
                            <th>Email</th>
                            {/* <th>Details</th> */}
                            
                        </tr>

                    {resourceEnquiries.map(resourceEnquirie =>
                        // <div key={staff.id} className="staffListLI">
                        //     {/* <Staff details = {staff} /> */}
                        // </div>
                        <tr>
                            <td>{resourceEnquirie.name}</td>
                            <td>{resourceEnquirie.email}</td>
                            <td><Link to={`${resourceEnquirie.id}`}>View Enquiree Details</Link></td>
                            </tr>
                    )}
                
        </Table>
            </div>

        </>
    )
}

export default ViewReq;