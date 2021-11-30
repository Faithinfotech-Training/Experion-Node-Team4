import './ViewResource.css';
import axios from 'axios';

import {useState, useEffect } from "react";

import { useNavigate } from 'react-router';
import DeleteResources from '../DeleteResource/DeleteResource';
function ViewResource (){

    let navigate = useNavigate();
    const goBack = () => {
      navigate('/admin/resource')
    }

    const [resources,setResources] = useState([]);
    // const navigate =useNavigate()

    useEffect(()=>{
        console.log('The use effect hook has been executed');

        axios
        .get('http://localhost:3009/resources')
        .then(response =>{
            console.log('Promise fulfilled');
            console.log(response);
            //response object contains the complete HTTP REQUEST with
            //returned data, status code, and headers. We need only 'data'
            setResources(response.data);
        })

    }, [])


    return(
        <>
        <div>
            <h1>
              Resource List
            </h1>
            <div>
                {resources.map(resource =>
                    // <div key={staff.id} className="staffListLI">
                    //     {/* <Staff details = {staff} /> */}
                    // </div>
                    <div>
                    <div> Resource Code :{resource.resourcecode}</div>
                    <div> Resource Name:{resource.resourcename}</div>
                    <div>Resource Fee: {resource.resourcefee}</div>
                    <div>{resource.category}</div>
                    {/* <button type ="button"
onClick={()=> DeleteResources(resource.id)}> Delete</button> */}
<br/>
<button type ="button"
onClick={()=> DeleteResources(resource.id)}> Delete</button>
<br/>
<button type ="button"
onClick={()=>navigate(`/admin/resource/edit-resource/${resource.id}`) }> Edit</button> <br/> 
  <button variant="primary" type="reset" onClick={() => goBack()}>
          Go Back
        </button>

                    </div>
                    )}
            </div>

        </div>
        </>
    )
}

export default ViewResource