import ManagerDashboard from "../../Components/ManagerDashboard/ManagerDashboard";
// import Dashboard from '../../Components/Dashboard/Dashboard';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Table, Button } from "react-bootstrap";
function ManagerViewResourseEnquiry() {
 const [resourceEnquiries, setResourceEnquiries] = useState([]);
 const mytoken = localStorage.getItem('mytoken');

 const navigate = useNavigate();
  const goBack = () => {
      navigate('/manager')
  }

useEffect(() => {
    console.log('The use effect hook has been executed');
    var config = {
        method: 'get',
        url: `http://localhost:3009/resource-enquiries/`,
        headers: { 
          'Authorization': `Bearer ${mytoken}`, 
          'Content-Type': 'application/json'
        }
      }

    axios(config)
        .then(response => {
            console.log('Promise fulfilled');
            console.log(response);
    
            setResourceEnquiries(response.data);
        })

}, []);

  return (
    <>
        <ManagerDashboard />
        <div className="mainBody">
            <h4>
                Resource enquiries List
            </h4>
            <Table striped bordered hover>
            <tr>
                            {/* <th>id</th> */}
                            <th>Resource Name</th>
                            <th>Email</th>
                            <th>Details</th>
                            
                        </tr>
           
                {resourceEnquiries.map(resourceEnquirie =>
                    // <div key={staff.id} className="staffListLI">
                    //     {/* <Staff details = {staff} /> */}
                    // </div>
                   <tr>
                        <td>{resourceEnquirie.resourceName} </td>
                        <td>{resourceEnquirie.email}</td>
                        <td><Link to={`${resourceEnquirie.id}`} >View Enquiree Details</Link></td>
                    </tr>
                )}
            
         </Table>

         <Button className="right" variant="primary" type="reset" onClick={() => goBack()}>
                    Go Back
                </Button>
        </div>

    </>
)
}

export default ManagerViewResourseEnquiry;




