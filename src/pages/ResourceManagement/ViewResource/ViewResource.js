import './ViewResource.css';
import axios from 'axios';
import { Button } from "react-bootstrap";
// import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router';
import DeleteResources from '../DeleteResource/DeleteResource';
import Dashboard from '../../../Components/Dashboard/Dashboard';
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
    const notify = () => {
        toast.warn(<CustomToast/>,
            {
                position:toast.POSITION.TOP_CENTER
            })
    }
 
  

    let navigate = useNavigate();
    const goBack = () => {
        navigate('/admin/resource')
    }

    const [resources, setResources] = useState([]);
    // const navigate =useNavigate()

    useEffect(() => {
        console.log('The use effect hook has been executed');

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
            <Dashboard />
            <div className="resource-list">
                <center> <h1>
                    Resource List
                </h1> </center>
                <div>
                    {resources.map(resource =>
                        // <div key={staff.id} className="staffListLI">
                        //     {/* <Staff details = {staff} /> */}
                        // </div>
                        <center>
                            <div>
                                <div> Resource Code :{resource.resourcecode}</div>
                                <div> Resource Name:{resource.resourcename}</div>
                                <div>Resource Fee: {resource.resourcefee}</div>
                                <div> Category: {resource.category}</div>

                                {/* <button type ="button" onClick={()=> DeleteResources(resource.id)}> Delete</button> */}
                                <br />
                                <Button type="button" 
                                
                                    onClick=  {() =>{ notify(); DeleteResources(resource.id) }} variant="danger"> Delete</Button>
                                    <ToastContainer/>
                                &nbsp; &nbsp;&nbsp;
                                <Button type="button"
                                    onClick={ () => navigate(`/admin/resource/edit-resource/${resource.id}`)} variant="success"> Edit</Button>  &nbsp; &nbsp;&nbsp;
                                <Button variant="primary" type="reset" onClick={() => goBack()}>
                                    Go Back
                                </Button>
                                <br />
                                <br />

                            </div>
                        </center>
                    )}
                </div>


            </div>
        </>
    )
}

export default ViewResource