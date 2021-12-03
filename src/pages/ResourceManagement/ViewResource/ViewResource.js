// import './ViewResource.css';
import axios from 'axios';
import { Button } from "react-bootstrap";
// import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import handleConfirmText from '../DeleteResource/DeleteAlert';
import { useNavigate } from 'react-router';
import DeleteResources from '../DeleteResource/DeleteResource';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { Table } from "react-bootstrap";

const CustomToast = ({closeToast}) =>{
    return(
        <div>
            
            Are You Sure to Delete the Resources
            <button onClick = {closeToast}> Delete </button>
        </div>
    )
}

toast.configure()
function ViewResource() {
    let notify = () => {
        toast.warn(<CustomToast/>,
            {
                position:toast.POSITION.TOP_CENTER
            })
    }
    const [admin, setAdmin] = useState(false);
    const Admin = ()=>{

         if(localStorage.getItem('role') === 'Admin'){
             setAdmin(true);
         }
    }
    let inc = 0;

    const updateVisitCount = (id) => {

        axios.get(`http://localhost:3009/courses/${id}`).then((res) => {

            //   setCounter(response.data.visit + 1);

            console.log('initial visit', res.data.visit);

            let x = res.data.visit + 1;

            axios

                .put(`http://localhost:3009/courses/${id}`, { visit: x })

                .then((response) => {

                    console.log('Updated count', inc);

                });

        });

    };

    let navigate = useNavigate();
    const goBack = () => {
        navigate('/admin/resource')
    }

    const [resources, setResources] = useState([]);
    // const navigate =useNavigate()

    useEffect(() => {
        console.log('The use effect hook has been executed');
        Admin();
        axios
            .get('http://localhost:3009/resources')
            .then(response => {
                console.log('Promise fulfilled');
                console.log(response);
                //response object contains the complete HTTP REQUEST with
                //returned data, status code, and headers. We need only 'data'
                setResources(response.data);
            })
            

    }, [])


    return (
        <>
            {admin && <Dashboard />}
            <div className="resource-list">
                <center> <h1>
                    Resource List
                </h1> </center>
               
                <div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Course Name</th>
                            <th>Details</th>
                            
                        </tr></thead><tbody>
                       
                    {resources.map(resource =>
                        // <div key={staff.id} className="staffListLI">
                        //     {/* <Staff details = {staff} /> */}
                        // </div>
                      
                            <tr>
                                <td> {resource.resourcecode}</td>
                                <td> {resource.resourcename}</td>
                                <td>{resource.resourcefee}</td>
                                <td>{resource.category}</td>
                            
                             <td>   <Button type="button"
                                        onClick={async () => {
                                            await updateVisitCount(resource.id);

                                            navigate(`/home/resource-enquiry`);
                                        }}
                                    >
                                        Enquire
                                    </Button> </td>
                                {/* <button type ="button" onClick={()=> DeleteResources(resource.id)}> Delete</button> */}
                                {/* <br />   */}
                                {/* <ToastContainer/> */}
                             {admin && <td> <Button type="button" 
                                
                                    onClick=  {() => handleConfirmText(resource.id) } variant="danger"> Delete</Button>
                                </td> }
                              
                             {admin && <td>  <Button type="button"
                                    onClick={ () => navigate(`/admin/resource/edit-resource/${resource.id}`)} variant="success"> Edit</Button></td>}
                               {admin && <td> <Button variant="primary" type="reset" onClick={() => goBack()}>
                                    Go Back
                                </Button></td>}
                                </tr>

                        
                    )}
                    </tbody>
                   </Table> 
                </div>
                                

            </div>
        </>
    )
}

export default ViewResource