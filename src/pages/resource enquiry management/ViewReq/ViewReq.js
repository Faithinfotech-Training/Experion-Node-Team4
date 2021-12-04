import Dashboard from "../../../Components/Dashboard/Dashboard";

// import './ViewCourse.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import './ViewReq.css'

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
            <div className="view-req">
                <h1>
                    Resource enquiries List
                </h1>
                <div>
                    {resourceEnquiries.map(resourceEnquirie =>
                        // <div key={staff.id} className="staffListLI">
                        //     {/* <Staff details = {staff} /> */}
                        // </div>
                        <div>
                            <div>{resourceEnquirie.name}</div>
                            <div>{resourceEnquirie.email}</div>
                            <div><Link to={`${resourceEnquirie.id}`}>View Enquiree Details</Link></div>
                        </div>
                    )}
                </div>

            </div>

        </>
    )
}

export default ViewReq;